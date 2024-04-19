import { BaseCatalogResponseDto } from "./BaseCatalogResponseDto";

export interface CraftResponseDto extends BaseCatalogResponseDto {
  SerialId: string;
  CraftmanId: number;
  CraftmanFullName: string;
  CraftStatus: number;
  CraftStatusName: string;
  PublicationDate: Date;
  Price: number;
  History: string;
  CraftPictureUrl: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCraftResponseDto(json: string): CraftResponseDto {
    return JSON.parse(json);
  }

  public static craftResponseDtoToJson(value: CraftResponseDto): string {
    return JSON.stringify(value);
  }
}
