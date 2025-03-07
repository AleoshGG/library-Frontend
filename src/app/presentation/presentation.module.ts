import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/book-form/books.component';
import { FormsModule } from '@angular/forms';
import { PageBookComponent } from './books/page-book/page-book.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './books/search/search.component';
import { CardBookComponent } from './books/card-book/card-book.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PageLoansComponent } from './loans/page-loans/page-loans.component';
import { ReaderFormComponent } from './loans/reader-form/reader-form.component';
import { SearchReaderComponent } from './loans/search-reader/search-reader.component';
import { SearchReaderIntputComponent } from './loans/search-reader-intput/search-reader-intput.component';
import { TargetStatussComponent } from './loans/target-statuss/target-statuss.component';
import { SearchBookComponent } from './loans/search-book/search-book.component';
import { SearchBookIntputComponent } from './loans/search-book-intput/search-book-intput.component';
import { TargetStatusBComponent } from './loans/target-status-b/target-status-b.component';
import { TableLoansComponent } from './loans/table-loans/table-loans.component';

@NgModule({
  declarations: [
    BooksComponent,
    PageBookComponent,
    HeaderComponent,
    SearchComponent,
    CardBookComponent,
    BackToTopComponent,
    MenuComponent,
    PageLoansComponent,
    ReaderFormComponent,
    SearchReaderComponent,
    SearchReaderIntputComponent,
    TargetStatussComponent,
    SearchBookComponent,
    SearchBookIntputComponent,
    TargetStatusBComponent,
    TableLoansComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [HeaderComponent, MenuComponent],
})
export class PresentationModule {}
