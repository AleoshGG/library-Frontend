import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-reader-intput',
  templateUrl: './search-reader-intput.component.html',
  styleUrl: './search-reader-intput.component.css',
})
export class SearchReaderIntputComponent {
  @Output() setBooks = new EventEmitter<void>();


  title = '';

  constructor() {}

}
