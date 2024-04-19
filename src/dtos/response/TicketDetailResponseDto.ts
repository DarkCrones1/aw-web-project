import { CartDetailResponseDto } from "./CartDetailResponseDto";

export interface TicketDetailResponseDto {
  Id: number;
  SerialId: string;
  CartId: number;
  Status: number;
  StatusName: string;
  CloseTicket: Date;
  Cart: CartDetailResponseDto;
}
