export interface BaseCatalogResponseDto {
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  IsActive: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBaseCatalogResponseDto(json: string): BaseCatalogResponseDto {
    return JSON.parse(json);
  }

  public static baseCatalogResponseDtoToJson(
    value: BaseCatalogResponseDto
  ): string {
    return JSON.stringify(value);
  }
}
