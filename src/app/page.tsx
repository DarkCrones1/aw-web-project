"use client";

import { APIResponse } from "@/dtos/response/ApiResponse";
import { CategoryResponseDto } from "@/dtos/response/CategoryResponseDto";
import { GetCategory } from "@/libs/Category/getCategory";
import { useEffect, useState } from "react";

export default function Home() {
  const [categoryData, setCategoryData] =
    useState<APIResponse<CategoryResponseDto[]>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const category = await GetCategory();
        setCategoryData(category);
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };

    fetchData();
  }, []);

  if (!categoryData || !categoryData.Data) {
    return <div>Loading...</div>;
  }

  const { Data, Message, Meta } = categoryData;

  return (
    <div>
      {Data.map((data) => (
        <ul key={data.Id}>
          <h1>{data.Name}</h1>
          <p>{data.Description}</p>
        </ul>
      ))}
    </div>
  );
}
