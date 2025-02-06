import { Book } from '../../domain/books.model';
import { BookListDTO } from '../dtos/books/bookList.dto';

export class BookMapper {
  static fromDTO(dto: BookListDTO): Book[] {
    return dto.data.map(
      (item) =>
        new Book(
          item.Id_book,
          item.Title,
          item.Date_publication,
          item.Editorial,
          item.Amount
        )
    );
  }
}
