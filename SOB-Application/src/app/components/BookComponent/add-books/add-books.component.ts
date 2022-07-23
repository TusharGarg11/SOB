import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/BookServices/book.service';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  public book:Book=new Book();
  public image?:any;
  selectedFile?:FileList;
  currentFile?:File;
  fileInfos?:Observable<any>;
  imageSource?:any;
  constructor(private bookService:BookService,private router:Router) { }

  addBook(){    
    if (this.selectedFile) {
      const file: File | null = this.selectedFile.item(0);
      if (file) {
        this.currentFile = file;
        this.bookService.setImage(this.currentFile,this.book).subscribe(
          error=>{
            console.log(error);
          }
        );
      }
    }
  }

  ngOnInit(): void {
  }

  onImageUpload(event:any){
    this.selectedFile=event.target.files;
    const fileImage=event.target.files[0];
    const fileReader=new FileReader();
    fileReader.onload=()=>{
      return this.imageSource=fileReader.result;
    }
    fileReader.readAsDataURL(fileImage);
  }
 
}
