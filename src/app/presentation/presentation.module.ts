import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/book-form/books.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './books/list/list.component'



@NgModule({
  declarations: [
    BooksComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BooksComponent,
    ListComponent
  ]
})
export class PresentationModule { }
