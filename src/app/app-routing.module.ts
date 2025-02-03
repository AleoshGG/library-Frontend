import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBookComponent } from './presentation/books/page-book/page-book.component';

const routes: Routes = [
  {
    path: '',
    component: PageBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
