import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../../core/domain/books.model';
import { GetBookByTitleUseCase } from '../../../core/useCases/books/getBookByTitle.useCase';
import Bell from 'bell-alert';

@Component({
  selector: 'search-book-intput',
  templateUrl: './search-book-intput.component.html',
  styleUrl: './search-book-intput.component.css',
})
export class SearchBookIntputComponent {
  @Output() setBooks = new EventEmitter<Book>();

  title = '';

  constructor(private getBookByTitleUseCase: GetBookByTitleUseCase) {}

  search() {
    this.getBookByTitleUseCase.execute(this.title).subscribe({
      next: (book) => {
        this.setBooks.emit(book[0]);
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
