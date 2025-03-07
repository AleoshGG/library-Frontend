import { Component } from '@angular/core';

@Component({
  selector: 'page-loans',
  templateUrl: './page-loans.component.html',
  styleUrl: './page-loans.component.css'
})
export class PageLoansComponent {
isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  

  constructor() {}

  ngOnInit() {
  }
}
