export interface TicketResponseDto {
  Id: number;
  SerialId: string;
  BranchStoreId: number;
  BranchStoreName: string;
  CartId: number;
  CustomerId: number;
  CustomerFullName: string;
  Status: number;
  StatusName: string;
  CloseTicket: Date;
}
