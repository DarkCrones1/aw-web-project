import { CategoryUpdateRequestDto } from "@/dtos/request/update/CategoryUpdateRequestDto";
import { APIResponse } from "@/dtos/response/ApiResponse";
import { CategoryResponseDto } from "@/dtos/response/CategoryResponseDto";

const token = localStorage.getItem("token");

export async function PutCategory({
  Id,
  formData,
}: {
  Id: number;
  formData: CategoryUpdateRequestDto;
}): Promise<CategoryUpdateRequestDto> {
  try {
    const response = await fetch(`http://localhost:5149/api/Category/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data: APIResponse<CategoryResponseDto> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    throw error;
  }
}
