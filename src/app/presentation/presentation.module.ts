import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/book-form/books.component';
import { FormsModule } from '@angular/forms';
import { PageBookComponent } from './books/page-book/page-book.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './books/search/search.component';
import { CardBookComponent } from './books/card-book/card-book.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    BooksComponent,
    PageBookComponent,
    HeaderComponent,
    SearchComponent,
    CardBookComponent,
    BackToTopComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class PresentationModule {}
