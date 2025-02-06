import { Observable } from 'rxjs';
import { BookRepository } from '../../repositories/book.repository';
import { Book } from '../../domain/books.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CreateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  execute(book: Book): Observable<Book> {
    return this.bookRepository.createBook(book);
  }

}
