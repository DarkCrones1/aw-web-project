"use client";

import { BaseCatalogCreateRequestDto } from "@/dtos/request/create/BaseCatalogCreateRequestDto";
import { CraftCreateRequestDto } from "@/dtos/request/create/CraftCreateRequestDto";
import { ImageCreateRequestDto } from "@/dtos/request/create/ImageCreateRequestDto";
import { BaseCatalogResponseDto } from "@/dtos/response/BaseCatalogResponseDto";
import { GetCategory } from "@/libs/Category/getCategory";
import { PostCraft } from "@/libs/Craft/postCraft";
import { postCraftImage } from "@/libs/Craft/postCraftImage";
import { GetCulture } from "@/libs/Culture/getCulture";
import { GetTechniqueType } from "@/libs/TechniqueType/getTechniquetype";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CraftModal } from "./CraftForm";

export default function CreateCraft() {
  useEffect(() => {
    const fetchData = async () => {
      const fetchCategories = await GetCategory();
      const fetchTechniques = await GetTechniqueType();
      const fetchCultures = await GetCulture();
      setCategory(fetchCategories.Data);
      setTechnique(fetchTechniques);
      setCulture(fetchCultures);
    };

    fetchData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formDataCraft, setFormDataCraft] = useState<CraftCreateRequestDto>({
    Name: "",
    Description: "",
    Price: 0,
    History: "",
    CultureId: 0,
    CategoryIds: [],
    TechniqueTypeIds: [],
    Propertys: [],
  });

  const resetForm = () => {
    setFormDataCraft({
      Name: "",
      Description: "",
      Price: 0,
      History: "",
      CultureId: 0,
      CategoryIds: [],
      TechniqueTypeIds: [],
      Propertys: [],
    });
    setFormImageCraft({} as ImageCreateRequestDto);
    setCategoryIds([]);
    setTechniquetypeIds([]);
    setCultureId(1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataCraft((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // sube la imagen despues de recuperar la info del craft
  const [formImageCraft, setFormImageCraft] = useState<ImageCreateRequestDto>(
    {} as ImageCreateRequestDto
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormImageCraft((prevData) => ({
        ...prevData,
        file: file,
      }));
    }
  };

  //Envia el formulario
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const craftResponseFetch = await PostCraft(formDataCraft);
      setFormImageCraft((prevData) => ({
        ...prevData,
        entityAssigmentId: craftResponseFetch?.Id!,
      }));
      toggleModal();
      alert("Artesanía agregada exitosamente");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Se ejecuta el efecto de hacer el await de la imagen cuando cambia xD
  useEffect(() => {
    const uploadImage = async () => {
      try {
        if (formImageCraft.entityAssigmentId) {
          await postCraftImage(formImageCraft);
          // onSubmitSuccess();
          resetForm();
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    uploadImage();
  }, [formImageCraft]);

  // Añade el array de Categorias al formData
  const [category, setCategory] = useState<BaseCatalogResponseDto[]>([]);
  const [categoryIds, setCategoryIds] = useState<number[]>([]);

  const handleAddCategory = () => {
    const selectElement = document.getElementById(
      "opcionesC"
    ) as HTMLSelectElement;
    const seleecttedCategoryId = parseInt(selectElement.value);
    setCategoryIds((prevIds) => [...prevIds, seleecttedCategoryId]);
  };

  const handleRemoveCategory = (id: number) => {
    setCategoryIds((prevItem) => {
      return prevItem.filter((currentItem) => currentItem !== id);
    });
  };

  useEffect(() => {
    setFormDataCraft((prevState) => ({
      ...prevState,
      CategoryIds: categoryIds,
    }));
  }, [categoryIds]);

  // Añade el array de Tecnicas al formData
  const [technique, setTechnique] = useState<BaseCatalogResponseDto[]>([]);
  const [techniqueTypeIds, setTechniquetypeIds] = useState<number[]>([]);

  const handleAddTechnique = () => {
    const selectElement = document.getElementById(
      "opcionesT"
    ) as HTMLSelectElement;
    const selecttedTechniqueId = parseInt(selectElement.value);
    setTechniquetypeIds((prevIds) => [...prevIds, selecttedTechniqueId]);
  };

  const handleRemoveTechnique = (id: number) => {
    setTechniquetypeIds((prevItem) => {
      return prevItem.filter((currentItem) => currentItem !== id);
    });
  };

  useEffect(() => {
    setFormDataCraft((prevState) => ({
      ...prevState,
      TechniqueTypeIds: techniqueTypeIds,
    }));
  }, [techniqueTypeIds]);

  // Selecciona la Cultura y lo añade al formData
  const [culture, setCulture] = useState<BaseCatalogResponseDto[]>([]);
  const [cultureId, setCultureId] = useState<number>(1);

  const handleChangeCulture = () => {
    const selectElement = document.getElementById(
      "opcionesCu"
    ) as HTMLSelectElement;
    const selecttedCultureId = parseInt(selectElement.value);
    setCultureId(selecttedCultureId);
  };

  useEffect(() => {
    setFormDataCraft((prevState) => ({
      ...prevState,
      CultureId: cultureId,
    }));
  }, [cultureId]);

  const [formCraftProperty, setFormCraftProperty] =
    useState<BaseCatalogCreateRequestDto>({} as BaseCatalogCreateRequestDto);

  const handleAddProperty = () => {};

  return (
    <CraftModal
      toggleModal={toggleModal}
      isModalOpen={isModalOpen}
      formDataCraft={formDataCraft}
      onSubmit={onSubmit}
      handleChange={handleChange}
      category={category}
      handleRemoveCategory={handleRemoveCategory}
      handleAddCategory={handleAddCategory}
      categoryIds={categoryIds}
      technique={technique}
      handleAddTechnique={handleAddTechnique}
      handleRemoveTechnique={handleRemoveTechnique}
      techniqueTypeIds={techniqueTypeIds}
      culture={culture}
      handleChangeCulture={handleChangeCulture}
      handleAddProperty={handleAddProperty}
      property={formCraftProperty}
      handleImageChange={handleImageChange}
    />
  );
}
