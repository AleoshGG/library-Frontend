import { Injectable } from '@angular/core';
import { BookRepository } from '../../repositories/book.repository';
import { Observable } from 'rxjs';
import { Book } from '../../domain/books.model';

@Injectable({
  providedIn: 'root',
})
export class DeleteBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  execute(id_book: number): Observable<Book> {
    return this.bookRepository.deleteBook(id_book);
  }
}
