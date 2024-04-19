export interface CartResponseDto {
  Id: number;
  CustomerId: number;
  CustomerFullName: string;
  Status: number;
  StatusName: string;
  Total: number;
}

export class Convert {
  public static toCartResponseDto(json: string): CartResponseDto {
    return JSON.parse(json);
  }

  public static cartResponseDtoToJson(value: CartResponseDto): string {
    return JSON.stringify(value);
  }
}
