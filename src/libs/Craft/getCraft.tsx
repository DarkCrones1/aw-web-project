import { APIResponse } from "@/dtos/response/ApiResponse";
import { CraftResponseDto } from "@/dtos/response/CraftResponseDto";

export const GetCraft = async (): Promise<CraftResponseDto[]> => {
  try {
    const response = await fetch(
      "http://localhost:5149/api/Craft?IsDeleted=false"
    );
    const data: APIResponse<CraftResponseDto[]> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return [];
  }
};
