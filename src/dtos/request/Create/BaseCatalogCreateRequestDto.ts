export interface BaseCatalogCreateRequestDto {
  Name: string;
  Description: string;
}

// Converts JSON strings to/from your types
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
