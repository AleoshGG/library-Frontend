import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateLoanUseCase } from '../../../core/useCases/loans/createLoan.useCase';
import { Loan } from '../../../core/domain/loan.model';
import Bell from 'bell-alert';

@Component({
  selector: 'return-date',
  templateUrl: './return-date.component.html',
  styleUrl: './return-date.component.css',
})
export class ReturnDateComponent {
  @Input() id_reader!: number;
  @Input() id_book!: number;
  @Input() isOpen = false;
  @Input() title = 'Modal';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  return_date!: '';
  constructor(private createLoanUseCase: CreateLoanUseCase) {}

  saveLoan() {
    const newLoan = new Loan(this.id_book, this.return_date, this.id_reader);

    this.createLoanUseCase.execute(newLoan).subscribe({
      next: () => {
        const bell = new Bell(
          {
            title: 'Éxito',
            description: 'Espere en el correo la confirmación',
          },
          'success'
        );
        this.closeModal();
        bell.launch();
      },
      error: (err) => {
        const bell = new Bell(
          {
            title: 'Ha ocurrido un error',
            description: 'Intentelo más tarde',
          },
          'error'
        );
        bell.launch();
        this.closeModal();
        console.log(err);
      },
    });
  }
}
