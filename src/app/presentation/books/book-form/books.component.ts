import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../core/domain/books.model';
import { CreateBookUseCase } from '../../../core/useCases/books/createBook.useCase';

@Component({
  selector: 'books-form',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  @Input() isOpen = false;
  @Input() title = 'Modal';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  book = new Book(0, '', '', '', 0);

  constructor(private createBookUseCase: CreateBookUseCase) {}

  createBook(): void {
    const newBook = new Book(
      0,
      this.book.title,
      this.book.date_publication,
      this.book.editorial,
      this.book.amount
    );

    this.createBookUseCase.execute(newBook).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
