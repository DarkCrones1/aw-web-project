import { CraftResponseDto } from "./CraftResponseDto";

export interface CartDetailResponseDto {
  Id: number;
  CustomerId: number;
  CustomerFullName: string;
  Status: number;
  StatusName: string;
  Total: number;
  Craft: CraftResponseDto[];
}
