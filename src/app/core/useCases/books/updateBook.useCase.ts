import { Injectable } from '@angular/core';
import { BookRepository } from '../../repositories/book.repository';
import { Observable } from 'rxjs';
import { Book } from '../../domain/books.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  execute(id_book: number, book: Book): Observable<Book> {
    return this.bookRepository.updateBook(id_book, book);
  }
}
