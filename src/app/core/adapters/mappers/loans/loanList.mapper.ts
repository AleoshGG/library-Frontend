import { Loan } from '../../../domain/loan.model';
import { LoanListDTO } from '../../dtos/loans/loanList.dto';

export class LoanMapper {
  static fromDTO(dto: LoanListDTO): Loan[] {
    return dto.data.map(
      (item) => new Loan(item.Id_book, item.Return_date, item.Id_reader)
    );
  }
}
