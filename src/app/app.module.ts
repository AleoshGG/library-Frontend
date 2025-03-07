import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { BookRepository } from './core/repositories/book.repository';
import { BookApiRepository } from './infrastructure/api-repository/book-api.respository';
import { HttpClientModule } from '@angular/common/http';
import { ReaderRepository } from './core/repositories/reader.repository';
import { ReaderApiRepository } from './infrastructure/api-repository/reader-api.respository';
import { LoanRepository } from './core/repositories/loan.repository';
import { LoanApiRepository } from './infrastructure/api-repository/loan-api.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
    HttpClientModule,
  ],
  providers: [
    { provide: BookRepository, useClass: BookApiRepository },
    { provide: ReaderRepository, useClass: ReaderApiRepository },
    { provide: LoanRepository, useClass: LoanApiRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
