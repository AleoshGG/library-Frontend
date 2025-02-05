import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/book-form/books.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './books/list/list.component';
import { PageBookComponent } from './books/page-book/page-book.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './books/search/search.component';

@NgModule({
  declarations: [
    BooksComponent,
    ListComponent,
    PageBookComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class PresentationModule {}
