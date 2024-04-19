import { BaseCatalogResponseDto } from "./BaseCatalogResponseDto";

export interface TechniqueTypeResponseDto extends BaseCatalogResponseDto {}

// Converts JSON strings to/from your types
export class Convert {
  public static toTechniqueTypeResponseDto(
    json: string
  ): TechniqueTypeResponseDto {
    return JSON.parse(json);
  }

  public static TechniqueTypeResponseDtoToJson(
    value: TechniqueTypeResponseDto
  ): string {
    return JSON.stringify(value);
  }
}
