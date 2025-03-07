import { Injectable } from '@angular/core';
import { LoanRepository } from '../../repositories/loan.repository';
import { Loan } from '../../domain/loan.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  execute(loan: Loan): Observable<Loan> {
    return this.loanRepository.createLoan(loan);
  }
}
