import { Injectable } from '@angular/core';
import { BookRepository } from '../../core/repositories/book.repository';
import { map, Observable } from 'rxjs';
import { Book } from '../../core/domain/books.model';
import { HttpClient } from '@angular/common/http';
import { BookListDTO } from '../../core/adapters/dtos/books/bookList.dto';
import { BookMapper } from '../../core/adapters/mappers/books/bookList.mapper';

@Injectable({
  providedIn: 'root',
})
export class BookApiRepository implements BookRepository {
  private URL_BASE = 'http://54.159.73.69/books/';

  constructor(private http: HttpClient) {}

  deleteBook(id_book: number): Observable<Book> {
    return this.http.delete<Book>(`${this.URL_BASE}${id_book}`);
  }

  updateBook(id_book: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.URL_BASE}${id_book}`, book);
  }

  getBookByTitle(title: string): Observable<Book[]> {
    return this.http
      .get<BookListDTO>(`${this.URL_BASE}q=${title}`)
      .pipe(map(BookMapper.fromDTO));
  }

  getBookById(id_book: number): Observable<Book[]> {
    return this.http
      .get<BookListDTO>(`${this.URL_BASE}${id_book}`)
      .pipe(map(BookMapper.fromDTO));
  }

  getAllBooks(): Observable<Book[]> {
    return this.http
      .get<BookListDTO>(this.URL_BASE)
      .pipe(map(BookMapper.fromDTO));
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL_BASE, book);
  }
}
