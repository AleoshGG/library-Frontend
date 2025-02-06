import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../core/domain/books.model';
import { CreateBookUseCase } from '../../../core/useCases/books/createBook.useCase';
import Bell from 'bell-alert';
import 'bell-alert/dist/bell.min.css';
import { UpdateBookUseCase } from '../../../core/useCases/books/updateBook.useCase';

@Component({
  selector: 'books-form',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  @Input() isOpen = false;
  @Input() mode!: number;
  @Input() id_book!: number;
  @Input() title = 'Modal';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private updateBookUseCase: UpdateBookUseCase
  ) {}

  book = new Book(0, '', '', '', 0);

  action(): void {
    switch (this.mode) {
      case 1:
        this.createBook();
        break;
      case 2:
        this.updateBook();
        break;
      default:
        break;
    }
  }

  createBook() {
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

  updateBook() {
    const newBook = new Book(
      0,
      this.book.title,
      this.book.date_publication,
      this.book.editorial,
      this.book.amount
    );

    this.updateBookUseCase.execute(this.id_book, newBook).subscribe({
      next: () => {
        const bell = new Bell(
          {
            title: 'Actualizado',
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
