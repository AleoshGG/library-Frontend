import { Component, Input } from '@angular/core';
import { Book } from '../../../core/domain/books.model';
import { DeleteBookUseCase } from '../../../core/useCases/books/deleteBook.useCase';
import Bell from 'bell-alert';

@Component({
  selector: 'card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css',
})
export class CardBookComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  @Input({ required: true }) book!: Book;

  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  delete(id_book: number) {
    this.deleteBookUseCase.execute(id_book).subscribe({
      next: () => {
        const bell = new Bell(
          {
            title: 'Éxito',
            description: 'El libro se eliminó correctamente',
          },
          'success'
        );
        bell.launch();
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
      },
    });
  }
}
