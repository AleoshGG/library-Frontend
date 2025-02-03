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

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL_BASE, book);
  }
}
