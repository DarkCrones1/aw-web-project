import { BaseCatalogCreateRequestDto } from "./BaseCatalogCreateRequestDto";

export interface CategoryCreateRequestDto extends BaseCatalogCreateRequestDto {}

export class Convert {
  public static toCategoryCreateRequestDto(
    json: string
  ): CategoryCreateRequestDto {
    return JSON.parse(json);
  }

  public static CategoryCreateRequestDtoToJson(
    value: CategoryCreateRequestDto
  ): string {
    return JSON.stringify(value);
  }
}
