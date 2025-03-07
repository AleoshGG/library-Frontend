import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBookComponent } from './presentation/books/page-book/page-book.component';
import { PageLoansComponent } from './presentation/loans/page-loans/page-loans.component';
import { PageReturnsComponent } from './presentation/returns/page-returns/page-returns.component';

const routes: Routes = [
  {
    path: '',
    component: PageBookComponent,
  },
  {
    path: 'loans',
    component: PageLoansComponent,
  },
  {
    path: 'returns',
    component: PageReturnsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
