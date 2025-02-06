import { Observable } from 'rxjs';
import { Book } from '../domain/books.model';

export abstract class BookRepository {
  // Ingerfaz de los casos de uso haciendo referencia a go
  abstract createBook(book: Book): Observable<Book>;
  abstract getAllBooks(): Observable<Book[]>;
  abstract getBookById(id_book: number): Observable<Book[]>;
  abstract getBookByTitle(title: string): Observable<Book[]>;
  abstract updateBook(id_book: number, book: Book): Observable<Book>;
  abstract deleteBook(id_book: number): Observable<Book>;
}
