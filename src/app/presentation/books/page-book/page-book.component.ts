import { Component, OnInit } from '@angular/core';
import { GetAllBooksUseCase } from '../../../core/useCases/books/getAllBooks.useCase';
import { Book } from '../../../core/domain/books.model';
import Bell from 'bell-alert';
import 'bell-alert/dist/bell.min.css';

@Component({
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrl: './page-book.component.css',
})
export class PageBookComponent implements OnInit {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  books: Book[] = [];

  constructor(private getAllBooks: GetAllBooksUseCase) {}
  ngOnInit(): void {
    this.getAllBooks.execute().subscribe({
      next: (res) => {
        res.forEach((book) => {
          this.books.push(book);
        });
        console.log(this.books);
      },
      error: (err) => {
        const bell = new Bell(
          {
            title: 'Ha ocurrido un error al actualizar los datos',
            description: 'Intentelo más tarde',
          },
          'error'
        );
        bell.launch();
        console.log(err);
      },
    });
  }

  searchBook(books: Book[]) {
    this.books = books;
  }
}
