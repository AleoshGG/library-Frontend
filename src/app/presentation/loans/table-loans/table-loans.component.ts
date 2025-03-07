import { Component } from '@angular/core';

interface Account {
  firstName: string;
  lastName: string;
  status: 'active' | 'suspended';
  borrowedBook: string;
  returnDate: string;
}

@Component({
  selector: 'table-loans',
  templateUrl: './table-loans.component.html',
  styleUrl: './table-loans.component.css',
})
export class TableLoansComponent {
  accounts: Account[] = [
    {
      firstName: 'María',
      lastName: 'Gómez',
      status: 'active',
      borrowedBook: 'El Quijote',
      returnDate: '2024-04-10',
    },
    {
      firstName: 'Carlos',
      lastName: 'López',
      status: 'suspended',
      borrowedBook: 'Cien años de soledad',
      returnDate: '2024-05-02',
    },
    {
      firstName: 'Ana',
      lastName: 'Martínez',
      status: 'active',
      borrowedBook: 'El principito',
      returnDate: '2024-03-20',
    },
  ];
}
