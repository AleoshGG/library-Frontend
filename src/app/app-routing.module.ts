import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBookComponent } from './presentation/books/page-book/page-book.component';
import { PageLoansComponent } from './presentation/loans/page-loans/page-loans.component';

const routes: Routes = [
  {
    path: '',
    component: PageBookComponent,
  },
  {
    path: 'loans',
    component: PageLoansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
