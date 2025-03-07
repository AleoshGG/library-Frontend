export interface LoanListDTO {
  data: {
    Id_reader: number;
    Id_book: number;
    Return_date: string;
  }[];
  links: {
    self: string;
  };
  status: boolean;
}
