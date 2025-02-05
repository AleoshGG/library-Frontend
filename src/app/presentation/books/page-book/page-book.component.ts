import { Component } from '@angular/core';

@Component({
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrl: './page-book.component.css',
})
export class PageBookComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
