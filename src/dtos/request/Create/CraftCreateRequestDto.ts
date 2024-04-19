import { BaseCatalogCreateRequestDto } from "./BaseCatalogCreateRequestDto";

export interface CraftCreateRequestDto extends BaseCatalogCreateRequestDto {
  Price?: number;
  History?: string;
  CultureId: number;
  CategoryIds?: number[];
  TechniqueTypeIds?: number[];
  Propertys?: BaseCatalogCreateRequestDto[];
}
