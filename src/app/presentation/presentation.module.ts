import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/book-form/books.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './books/list/list.component';
import { PageBookComponent } from './books/page-book/page-book.component';

@NgModule({
  declarations: [BooksComponent, ListComponent, PageBookComponent],
  imports: [CommonModule, FormsModule],
})
export class PresentationModule {}
