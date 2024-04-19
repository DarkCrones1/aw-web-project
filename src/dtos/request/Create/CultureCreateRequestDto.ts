import { BaseCatalogCreateRequestDto } from "./BaseCatalogCreateRequestDto";

export interface CultureCreateRequestDto extends BaseCatalogCreateRequestDto {}

export class Convert {
  public static toCultureCreateRequestDto(
    json: string
  ): CultureCreateRequestDto {
    return JSON.parse(json);
  }

  public static CultureCreateRequestDtoToJson(
    value: CultureCreateRequestDto
  ): string {
    return JSON.stringify(value);
  }
}
