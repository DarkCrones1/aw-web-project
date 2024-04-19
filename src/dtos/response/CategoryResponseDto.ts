import { BaseCatalogResponseDto } from "./BaseCatalogResponseDto";

export interface CategoryResponseDto extends BaseCatalogResponseDto {}

// Converts JSON strings to/from your types
export class Convert {
  public static toCategoryResponseDto(json: string): CategoryResponseDto {
    return JSON.parse(json);
  }

  public static categoryResponseDtoToJson(value: CategoryResponseDto): string {
    return JSON.stringify(value);
  }
}
