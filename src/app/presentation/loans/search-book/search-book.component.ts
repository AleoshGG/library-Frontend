import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../core/domain/books.model';

@Component({
  selector: 'search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.css',
})
export class SearchBookComponent {
  @Input() book!: Book;
  @Input() id_reader!: number;
  @Output() setBookPage = new EventEmitter<Book>();

  status: string = 'suspended';

  setBook(book: Book) {
    this.book.id_book = book.id_book;
    this.book.title = book.title;
    this.book.editorial = book.editorial;
    this.book.date_publication = this.book.date_publication;
    this.book.amount = this.book.amount;
    if (book.amount != 0) {
      this.status = 'active';
    }
    this.setBookPage.emit(this.book);
  }
}
