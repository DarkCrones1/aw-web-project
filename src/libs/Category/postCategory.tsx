import { CategoryCreateRequestDto } from "@/dtos/request/Create/CategoryCreateRequestDto";
import { APIResponse } from "@/dtos/response/ApiResponse";
import { CategoryResponseDto } from "@/dtos/response/CategoryResponseDto";

const token = localStorage.getItem("token");

export async function PostCategory(
  formData: CategoryCreateRequestDto
): Promise<CategoryResponseDto> {
  try {
    const response = await fetch("http://localhost:5149/api/Category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data: APIResponse<CategoryResponseDto> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    throw error;
  }
}
