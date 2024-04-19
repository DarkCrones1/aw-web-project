import { PropertyResponseDto } from "./PropertyResponseDto";

export interface TechniqueTypeDetailResponseDto {
    Id:          number;
    Name:        string;
    Description: string;
    Status:      string;
    IsActive:    boolean;
    Property:    PropertyResponseDto[];
}