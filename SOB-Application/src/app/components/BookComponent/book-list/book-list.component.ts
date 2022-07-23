import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/BookServices/book.service';

@Component({
  selector: '[app-book-list]',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books?:Book[];
  constructor(private bookService:BookService,public router:Router) { }

  ngOnInit(): void {
    this.getBooksImpl();
    }

  public getBooksImpl(){
    this.bookService.getAllBooks()
    .subscribe(data=>{
      this.displayDataInTable(data);
    })
  }

  public displayDataInTable(data:any){
    this.books=data;
  }

  // Transfer and use data using local Storage

  displayBookReview(book:Book){
    // this.router.navigate(['book-review',{my_object:JSON.stringify(book)}]);
    localStorage.setItem("data",JSON.stringify(book));
    this.router.navigate(['book-review']);
  }
}
