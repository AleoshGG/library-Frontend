import { Component, Input, OnInit } from '@angular/core';
import { DeleteLoanUseCase } from '../../../core/useCases/loans/deleteLoan.useCase';
import { Loan } from '../../../core/domain/loan.model';
import Bell from 'bell-alert';
import { Router } from '@angular/router';

@Component({
  selector: 'target-status-b',
  templateUrl: './target-status-b.component.html',
  styleUrl: './target-status-b.component.css',
})
export class TargetStatusBComponent implements OnInit {
  @Input() msg!: string;
  @Input() id_reader!: number;
  @Input() id_book!: number;
  @Input() userName: string = 'Usuario';
  @Input() accountStatus: string = 'active'; // 'active' o 'suspended'
  option: number = 1;

  constructor(private deleteLoanUseCase: DeleteLoanUseCase) {}

  ngOnInit(): void {
    if (this.msg == 'Devolver') {
      this.accountStatus = 'active';
      this.option = 2;
    }
  }

  isModalOpen = false;

  openModal() {
    let option = this.option;
    switch (option) {
      case 1:
        this.isModalOpen = true;
        break;
      case 2:
        this.returnBook();
        break;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  returnBook() {
    const id_reader = this.id_reader;
    const id_book = this.id_book;

    this.deleteLoanUseCase.execute(id_reader, id_book).subscribe({
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
