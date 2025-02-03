import { Component, OnInit } from '@angular/core';
import { GetAllBooksUseCase } from '../../../core/useCases/books/getAllBooks.useCase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private getAllBooksUseCase: GetAllBooksUseCase) {}

  ngOnInit(): void {
    this.getAllBooksUseCase.execute().subscribe({
      next: (respose) => {
        console.log(respose);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
