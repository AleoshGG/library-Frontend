import { Injectable } from '@angular/core';
import { LoanRepository } from '../../core/repositories/loan.repository';
import { map, Observable } from 'rxjs';
import { Loan } from '../../core/domain/loan.model';
import { HttpClient } from '@angular/common/http';
import { LoanListDTO } from '../../core/adapters/dtos/loans/loanList.dto';
import { LoanMapper } from '../../core/adapters/mappers/loans/loanList.mapper';

@Injectable({
  providedIn: 'root',
})
export class LoanApiRepository implements LoanRepository {
  private URL_BASE = 'http://localhost:8000/loans/';

  constructor(private http: HttpClient) {}

  createLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.URL_BASE, loan);
  }

  getAllLoans(): Observable<Loan[]> {
    return this.http
      .get<LoanListDTO>(this.URL_BASE)
      .pipe(map(LoanMapper.fromDTO));
  }

  deleteLoan(id_reader: number, id_book: number): Observable<Loan> {
    return this.http.delete<Loan>(
      `${this.URL_BASE}/?id_reader=${id_reader}&id_book=${id_book}`
    );
  }
}
