import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { BookRepository } from './core/repositories/book.repository';
import { BookApiRepository } from './infrastructure/api-repository/book-api.respository';
import { HttpClientModule } from '@angular/common/http';

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
    { provide: BookRepository, useClass: BookApiRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
