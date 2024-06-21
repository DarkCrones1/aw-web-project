"use client";
import { CategoryResponseDto } from "@/dtos/response/CategoryResponseDto";
import { CraftDetailResponseDto } from "@/dtos/response/CraftDetailResponseDto";
import { PropertyResponseDto } from "@/dtos/response/PropertyResponseDto";
import { TechniqueTypeResponseDto } from "@/dtos/response/TechniqueTypeResponseDto";
import Link from "next/link";

export default function CraftDetail({
  craft,
}: {
  craft: CraftDetailResponseDto;
}) {
  return (
    <div>
      <section>
        <h1>{craft.Id}</h1>
        <h3>{craft.Name}</h3>
        <h4>{craft.Description}</h4>
        <p>{craft.History}</p>
        {craft.Category.map((category: CategoryResponseDto) => (
          <div key={category.Id}>
            <h3>{category.Name}</h3>
            <p>{category.Description}</p>
          </div>
        ))}
        {craft.TechniqueType.map((technique: TechniqueTypeResponseDto) => (
          <div key={technique.Id}>
            <h3>{technique.Name}</h3>
            <p>{technique.Description}</p>
          </div>
        ))}
        {craft.Property.map((property: PropertyResponseDto) => (
          <div key={property.Id}>
            <h3>{property.Name}</h3>
            <p>{property.Description}</p>
          </div>
        ))}
        <img
          key={craft.Id}
          src={craft.CraftPictureUrl}
          alt="Imagen de artesanía"
          width={200}
          height={150}
        />
      </section>
      <section>
        <Link href={"/craft"}>Volver</Link>
      </section>
    </div>
  );
}
