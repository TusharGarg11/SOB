import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl='http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  // Get all User from Database
  getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

}
