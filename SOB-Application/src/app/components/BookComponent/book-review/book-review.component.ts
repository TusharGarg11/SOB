import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/BookServices/book.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
  public book?:Book;
  public image?:any;
  public retrievedImage?:any;
  constructor(private routeParam:ActivatedRoute,private bookService:BookService) { }

  ngOnInit(): void {
    this.displayOnConsole();
  }

  displayOnConsole(){
    this.book=JSON.parse(localStorage.getItem("data") || '{}');
    this.image=this.book?.bookImage?.image;
    this.retrievedImage = 'data:image/jpeg;base64,' + this.image;
    console.log(this.book);
  //   const val1=this.routeParam.snapshot.paramMap.get('my_object');
  //   if(typeof val1!='undefined' && val1){
  //    this.book=JSON.parse(val1);
  //    this.image=this.book?.bookImage?.image;
  //   this.retrievedImage = 'data:image/jpeg;base64,' + this.image; 
  //  }
    }

}
