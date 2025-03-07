import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-book-intput',
  templateUrl: './search-book-intput.component.html',
  styleUrl: './search-book-intput.component.css',
})
export class SearchBookIntputComponent {
  @Output() setBooks = new EventEmitter<void>();

  title = '';

  constructor() {}
}
