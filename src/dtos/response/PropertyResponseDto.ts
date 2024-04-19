export interface PropertyResponseDto {
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  IsActive: boolean;
  PropertyType: number;
  PropertyTypeName: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPropertyResponseDto(json: string): PropertyResponseDto {
    return JSON.parse(json);
  }

  public static propertyResponseDtoToJson(value: PropertyResponseDto): string {
    return JSON.stringify(value);
  }
}
