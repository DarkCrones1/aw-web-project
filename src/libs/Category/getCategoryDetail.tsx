import { APIResponse, Meta } from "@/dtos/response/ApiResponse";
import { CategoryResponseDto } from "@/dtos/response/CategoryResponseDto";

export const GetCategoryDetail = async ({
  Id,
}: {
  Id: number;
}): Promise<CategoryResponseDto> => {
  try {
    const response = await fetch(`http://localhost:5149/api/Category/${Id}`);
    const data: APIResponse<CategoryResponseDto> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al solicitar la información:", error);
    throw error;
  }
};
