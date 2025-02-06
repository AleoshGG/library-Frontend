import { Injectable } from '@angular/core';
import { BookRepository } from '../../repositories/book.repository';
import { Observable } from 'rxjs';
import { Book } from '../../domain/books.model';

@Injectable({
  providedIn: 'root',
})
export class GetBookByIdUseCase {
  constructor(private bookRepositoty: BookRepository) {}

  execute(id_book: number): Observable<Book[]> {
    return this.bookRepositoty.getBookById(id_book);
  }
}
