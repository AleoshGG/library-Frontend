import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/domain/books.model';
import { CreateBookUseCase } from '../../../core/useCases/books/createBook.useCase';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  book = new Book(0, 'Libro uno', '2025-02-02', 'San Pablo', 2);

  constructor(private createBookUseCase: CreateBookUseCase) {}

  ngOnInit(): void {
    this.createBookUseCase.execute(this.book).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
