import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/BookServices/book.service';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {
  
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  @ViewChild(BookListComponent)
  private bookListComponent?: BookListComponent;

  onKeydown(event:any){
    this.bookService.getBookBySearch(event.target.value)
    .subscribe(data=>{
      this.bookListComponent?.displayDataInTable(data);
      console.log(data);
    });
    event.target.value='';
  }

}
