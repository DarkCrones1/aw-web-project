import { APIResponse, Meta } from "@/dtos/response/ApiResponse";
import { CategoryResponseDto } from "@/dtos/response/CategoryResponseDto";

export const GetCategory = async (): Promise<
  APIResponse<CategoryResponseDto[]>
> => {
  try {
    const response = await fetch(
      "http://localhost:5149/api/Category?IsDeleted=false"
    );
    const data: APIResponse<CategoryResponseDto[]> = await response.json();
    return data;
  } catch (error) {
    return {
      Data: [],
      Message: `Error al obtener las categorias, ${error}}`,
      Meta: {} as Meta,
    };
  }
};
