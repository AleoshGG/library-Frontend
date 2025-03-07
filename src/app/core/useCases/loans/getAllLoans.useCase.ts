import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanRepository } from '../../repositories/loan.repository';
import { Loan } from '../../domain/loan.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllLoansUseCase {
  constructor(private loanRepository: LoanRepository) {}

  execute(): Observable<Loan[]> {
    return this.loanRepository.getAllLoans();
  }
}
