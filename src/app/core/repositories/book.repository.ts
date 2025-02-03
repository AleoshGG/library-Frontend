import { Observable } from 'rxjs';
import { IBook } from '../domain/books.model';

export abstract class BookRepository {
  // Ingerfaz de los casos de uso haciendo referencia a go
  abstract createBook(book: IBook): Observable<number>;
  abstract getAllBooks(): Observable<IBook[]>;
  abstract getBookById(id_book: number): Observable<IBook[]>;
  abstract getBookByTitle(title: string): Observable<IBook[]>;
  abstract UpdateBook(id_book: number, book: IBook): Observable<number>;
  abstract DeleteBook(id_book: number): Observable<number>;
}
