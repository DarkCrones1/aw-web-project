import { BaseCatalogCreateRequestDto } from "./BaseCatalogCreateRequestDto";

export interface TechniqueTypeCreateRequestDto {
  Name: string;
  Description: string;
  Propertys: BaseCatalogCreateRequestDto[];
}
