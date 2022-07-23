import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/BookComponent/add-books/add-books.component';
import { BookListComponent } from './components/BookComponent/book-list/book-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdvanceSearchComponent } from './components/BookComponent/advance-search/advance-search.component';
import { BookReviewComponent } from './components/BookComponent/book-review/book-review.component';

const routes: Routes = [
  {path:'',redirectTo:'book-list',pathMatch:'full'},
  {path:'users',component: UsersListComponent},
  {path:'book-list',component:BookListComponent},
  {path:'add-book',component:AddBooksComponent},
  {path:'advance-search',component:AdvanceSearchComponent},
  {path:'book-review',component:BookReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
