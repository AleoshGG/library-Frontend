import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../core/domain/books.model';
import { CreateBookUseCase } from '../../../core/useCases/books/createBook.useCase';
import Bell from 'bell-alert';
import 'bell-alert/dist/bell.min.css';

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
      next: () => {
        const bell = new Bell(
          {
            title: 'Guardado',
            description: 'El libro se guardó correctamente',
          },
          'success'
        );
        bell.launch();
        this.closeModal();
      },
      error: (err) => {
        const bell = new Bell(
          {
            title: 'Ha ocurrido un error',
            description: 'Intentelo más tarde',
          },
          'error'
        );
        bell.launch();
        console.log(err);
        this.closeModal();
      },
    });
  }
}
