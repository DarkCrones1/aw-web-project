export interface APIResponse<T> {
  Data: T;
  Message: string;
  Meta: Meta;
}

export interface Data<T> {
  Data: T;
}

export interface Meta {
  TotalCount: number;
  PageSize: number;
  CurrentPage: number;
  TotalPages: number;
  HasNextPage: boolean;
  HasPreviousPage: boolean;
  NextPageUrl: string;
  PreviousPageUrl: string;
  NextPageNumber: number;
  PreviousPageNumber: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAPIResponse<T>(json: string): APIResponse<T> {
    return JSON.parse(json);
  }

  public static aPIResponseToJson<T>(value: APIResponse<T>): string {
    return JSON.stringify(value);
  }
}
