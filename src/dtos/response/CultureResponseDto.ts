import { BaseCatalogResponseDto } from "./BaseCatalogResponseDto";

export interface CultureResponseDto extends BaseCatalogResponseDto {}

export class Convert {
  public static toCultureResponseDto(json: string): CultureResponseDto {
    return JSON.parse(json);
  }

  public static CultureResponseDtoToJson(value: CultureResponseDto): string {
    return JSON.stringify(value);
  }
}
