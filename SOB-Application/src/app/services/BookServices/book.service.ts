import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}`+'books');
  }
// In Observable we menthoned the type of response.

  getBookBySearch(searchValue:string):Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}`+'search?searchValue='+`${searchValue}`);
  }

  setImage(file:any,book:Object):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('data',JSON.stringify(book))
    const req = new HttpRequest('POST', `${this.baseUrl}upload/book`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getBookImage(id:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}getBookImage\${id}`);
  }
}