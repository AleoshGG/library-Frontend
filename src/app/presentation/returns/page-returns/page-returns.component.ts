import { Component } from '@angular/core';
import { Reader } from '../../../core/domain/reader.model';
import { Book } from '../../../core/domain/books.model';

@Component({
  selector: 'app-page-returns',
  templateUrl: './page-returns.component.html',
  styleUrl: './page-returns.component.css',
})
export class PageReturnsComponent {
  reader = new Reader(0, 'Sin', 'Nombre', '', 'suspended');
  book = new Book(0, 'Sin título', '', '', 0);
  bookS = false;

  setReader(reader: Reader) {
    this.reader.account_status = reader.account_status;
    this.reader.email = reader.email;
    this.reader.first_name = reader.first_name;
    this.reader.last_name = reader.last_name;
    this.reader.id_reader = reader.id_reader;
  }

  setBookS(confirm: boolean) {
    this.bookS = confirm;
  }

  setBook(book: Book) {
    this.book.id_book = book.id_book;
    this.book.title = book.title;
    this.book.editorial = book.editorial;
    this.book.date_publication = this.book.date_publication;
    this.book.amount = this.book.amount;
  }
}
