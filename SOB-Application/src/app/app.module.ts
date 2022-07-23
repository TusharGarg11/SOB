import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 
import { DataTablesModule } from 'angular-datatables';
import { UsersListComponent } from './components/users-list/users-list.component';
import { BookListComponent } from './components/BookComponent/book-list/book-list.component';
import { AddBooksComponent } from './components/BookComponent/add-books/add-books.component';
import { AdvanceSearchComponent } from './components/BookComponent/advance-search/advance-search.component';
import { BookReviewComponent } from './components/BookComponent/book-review/book-review.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    BookListComponent,
    AddBooksComponent,
    AdvanceSearchComponent,
    BookReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
