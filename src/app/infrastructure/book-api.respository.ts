import { Injectable } from '@angular/core';
import { BookRepository } from '../core/repositories/book.repository';
import { Observable } from 'rxjs';
import { Book } from '../core/domain/books.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookApiRepository implements BookRepository {
  private URL_BASE = 'http://localhost:8080/books/';

  constructor(private http: HttpClient) {}

  deleteBook(id_book: number): Observable<Book> {
    return this.http.delete<Book>(`${this.URL_BASE}${id_book}`);
  }

  updateBook(id_book: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.URL_BASE}${id_book}`, book);
  }

  getBookByTitle(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL_BASE}q=${title}`);
  }

  getBookById(id_book: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL_BASE}${id_book}`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL_BASE);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL_BASE, book);
  }
}
