import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserListService} from 'src/app/service/user-list.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    private userListService: UserListService,
    private router: Router
  ) { }

  ngOnInit() {

    console.log("Entered The User List component");
    this.users = new Array<User>();
    this.displayUserList();
  }


  displayUserList(){
    this.userListService.getList().subscribe(data => {
      if(data.success){
        console.log(data);
        this.users = data.userList
      }else{
        this.users = null
      }
    });
  }






}
