import { CategoryResponseDto } from "./CategoryResponseDto";
import { PropertyResponseDto } from "./PropertyResponseDto";
import { TechniqueTypeResponseDto } from "./TechniqueTypeResponseDto";

export interface CraftDetailResponseDto {
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  IsActive: boolean;
  SerialId: string;
  CraftmanId: number;
  CraftmanFullName: string;
  CraftStatus: number;
  CraftStatusName: string;
  PublicationDate: Date;
  Price: number;
  History: string;
  CraftPictureUrl: string;
  Category: CategoryResponseDto[];
  TechniqueType: TechniqueTypeResponseDto[];
  Property: PropertyResponseDto[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCraftDetailResponseDto(json: string): CraftDetailResponseDto {
    return JSON.parse(json);
  }

  public static craftDetailResponseDtoToJson(
    value: CraftDetailResponseDto
  ): string {
    return JSON.stringify(value);
  }
}
