import { Injectable } from '@angular/core';
import { LoanRepository } from '../../repositories/loan.repository';
import { Observable } from 'rxjs';
import { Loan } from '../../domain/loan.model';

@Injectable({
  providedIn: 'root',
})
export class DeleteLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  execute(id_reader: number, id_book: number): Observable<Loan> {
    return this.loanRepository.deleteLoan(id_reader, id_book);
  }
}
