import { Injectable } from '@angular/core';
import { BookRepository } from '../../repositories/book.repository';
import { Observable } from 'rxjs';
import { Book } from '../../domain/books.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllBooksUseCase {
  constructor(private bookRepository: BookRepository) {}

  execute(): Observable<Book[]> {
    return this.bookRepository.getAllBooks();
  }
}
