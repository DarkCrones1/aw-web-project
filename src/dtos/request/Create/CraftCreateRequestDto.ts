import { BaseCatalogCreateRequestDto } from "./BaseCatalogCreateRequestDto";

export interface CraftCreateRequestDto extends BaseCatalogCreateRequestDto {
  Price?: number;
  History?: string;
  CultureId: number;
  CategoryIds?: number[];
  TechniqueTypeIds?: number[];
  Propertys?: BaseCatalogCreateRequestDto[];
}

// Convierte cadenas JSON hacia/desde tus tipos
export class Convert {
  public static toBaseCatalogCreateRequestDto(
    json: string
  ): BaseCatalogCreateRequestDto {
    return JSON.parse(json);
  }

  public static baseCatalogCreateRequestDtoToJson(
    value: BaseCatalogCreateRequestDto
  ): string {
    return JSON.stringify(value);
  }
}
