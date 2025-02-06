import { Component, EventEmitter, Output } from '@angular/core';
import { GetBookByTitleUseCase } from '../../../core/useCases/books/getBookByTitle.useCase';
import { Book } from '../../../core/domain/books.model';
import Bell from 'bell-alert';

@Component({
  selector: 'book-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() setBooks = new EventEmitter<Book[]>();

  sBooks!: Book[];
  title = '';

  constructor(private getBookByTitleUseCase: GetBookByTitleUseCase) {}

  searchBook() {
    this.getBookByTitleUseCase.execute(this.title).subscribe({
      next: (books) => {
        this.setBooks.emit(books);
      },
      error: (err) => {
        const bell = new Bell(
          {
            title: 'No se encontró el libro',
            description: 'Revise el título',
          },
          'warning'
        );
        bell.launch();
        console.log(err);
      },
    });
  }
}
