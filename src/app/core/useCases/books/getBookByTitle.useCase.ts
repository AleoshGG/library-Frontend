import { Injectable } from '@angular/core';
import { BookRepository } from '../../repositories/book.repository';
import { Observable } from 'rxjs';
import { Book } from '../../domain/books.model';

@Injectable({
  providedIn: 'root',
})
export class GetBookByTitleUseCase {
  constructor(private bookRepository: BookRepository) {}

  execute(title: string): Observable<Book[]> {
    return this.bookRepository.getBookByTitle(title);
  }
}
