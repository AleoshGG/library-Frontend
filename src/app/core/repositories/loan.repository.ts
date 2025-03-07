import { Observable } from 'rxjs';
import { Loan } from '../domain/loan.model';

export abstract class LoanRepository {
  // Ingerfaz de los casos de uso haciendo referencia a go
  abstract createLoan(loan: Loan): Observable<Loan>;
  abstract getAllLoans(): Observable<Loan[]>;
  abstract deleteLoan(id_reader: number, id_book: number): Observable<Loan>;
}
