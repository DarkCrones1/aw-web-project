export interface UserAccountCustomerResponseDto {
  Id: number;
  CustomerId: number;
  UserName: string;
  Email: string;
  FullName: string;
  Phone: string;
  CellPhone: string;
  UserAccountType: number;
  UserAccountTypeName: string;
  IsDeleted: boolean;
}
