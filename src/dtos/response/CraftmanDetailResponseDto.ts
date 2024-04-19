import { CraftResponseDto } from "./CraftResponseDto";

export interface CraftmanDetailResponseDto {
  Id: number;
  Code: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Phone: string;
  CellPhone: string;
  Status: number;
  StatusName: string;
  Gender: number;
  GenderName: string;
  BirthDate: Date;
  ProfilePictureUrl: string;
  FullName: string;
  Address1: string;
  Address2: string;
  Street: string;
  ExternalNumber: string;
  InternalNumber: string;
  ZipCode: string;
  CityId: number;
  FullAddress: string;
  Craft: CraftResponseDto[];
}
