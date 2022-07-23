import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users?:User[];
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    this.userService.getAll()
    .subscribe(data =>{
      this.users=data;
    })
  }
}
