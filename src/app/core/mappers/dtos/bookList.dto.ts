export interface BookListDTO {
  data: {
    Id_book: number;
    Title: string;
    Date_publication: string;
    Editorial: string;
    Amount: number;
  }[];
  links: {
    self: string;
  };
  status: boolean;
}
