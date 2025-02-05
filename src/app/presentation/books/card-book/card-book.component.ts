import { Component, Input } from '@angular/core';
import { Book } from '../../../core/domain/books.model';

@Component({
  selector: 'card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css',
})
export class CardBookComponent {
  @Input({ required: true }) book!: Book;
}
