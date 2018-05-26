import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { Book } from './book';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
