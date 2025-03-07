export interface ReaderListDTO {
  data: {
    Id_reader: number;
    First_name: string;
    Last_name: string;
    Email: string;
    Account_status: string;
  }[];
  links: {
    self: string;
  };
  status: boolean;
}
