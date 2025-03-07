import { Component, OnInit } from '@angular/core';
import { GetAllLoansUseCase } from '../../../core/useCases/loans/getAllLoans.useCase';
import { Loan } from '../../../core/domain/loan.model';
import Bell from 'bell-alert';
import { Reader } from '../../../core/domain/reader.model';
import { Book } from '../../../core/domain/books.model';
import { GetBookByIdUseCase } from '../../../core/useCases/books/getBookById.useCase';
import { GetReaderByIdUseCase } from '../../../core/useCases/readers/getReaderById.useCase';
import { forkJoin } from 'rxjs';

interface Presentation {
  first_name: string;
  last_name: string;
  account_status: string;
  title: string;
  return_date: string;
}

@Component({
  selector: 'table-loans',
  templateUrl: './table-loans.component.html',
  styleUrl: './table-loans.component.css',
})
export class TableLoansComponent implements OnInit {
  loans: Loan[] = [];
  readers: Reader[] = [];
  books: Book[] = [];
  presentation: Presentation[] = [];

  constructor(
    private getAllLoansUseCase: GetAllLoansUseCase,
    private getReaderByIdUseCase: GetReaderByIdUseCase,
    private getBookByIdUseCase: GetBookByIdUseCase
  ) {}

  ngOnInit(): void {
    this.fetchBook();
    setInterval(() => this.fetchBook, 20000);
  }

  private showErrorAlert(error: any): void {
    const bell = new Bell(
      {
        title: 'Ha ocurrido un error al actualizar los datos',
        description: 'Intentelo más tarde',
      },
      'error'
    );
    bell.launch();
    console.error(error);
  }

  fetchBook() {
    this.getAllLoansUseCase.execute().subscribe({
      next: (loans) => {
        this.loans = loans;
        if (loans.length === 0) return;

        // Obtener los datos de los lectores y libros en paralelo
        forkJoin({
          readers: forkJoin(
            loans.map((loan) =>
              this.getReaderByIdUseCase.execute(loan.id_reader)
            )
          ),
          books: forkJoin(
            loans.map((loan) => this.getBookByIdUseCase.execute(loan.id_book))
          ),
        }).subscribe({
          next: ({ readers, books }) => {
            // Corregimos la estructura de datos usando flat()
            this.readers = readers.flat();
            this.books = books.flat();

            // Construimos la lista de presentación
            this.presentation = this.loans.map((loan, i) => ({
              first_name: this.readers[i]?.first_name || 'Desconocido',
              last_name: this.readers[i]?.last_name || 'Desconocido',
              account_status: this.readers[i]?.account_status || 'Desconocido',
              title: this.books[i]?.title || 'Desconocido',
              return_date: loan.return_date,
            }));
          },
          error: (err) => this.showErrorAlert(err),
        });
      },
      error: (err) => this.showErrorAlert(err),
    });
  }
}
