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
