import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListService } from 'src/app/service/user-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  title: string;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userListService: UserListService,
    private router: Router
  ) { }
  
  ngOnInit() {

    this.title = this.activatedRoute.snapshot.data.title;
    this.user = new User();

    this.activatedRoute.params.subscribe(params =>{
      this.user._id = params.id;
    });

    if(this.title == 'Edit User'){
     // this.getUser(this.user);
    }

  }

  /*
  private getUser(user: User):void{
    this.userListService.getUser(user).subscribe(data => {
      this.user = data.user;
    })
  }
  */

  public onDetailsSubmit():void{
    switch(this.title){
      case "Add User":
        this.userListService.addUser(this.user).subscribe(data => {
          if(data.success){
            this.router.navigate(['/Users']);
          }else{
            this.router.navigate(['/Users']);
            console.log(data);
            
          }
        });
      break;

  }
  }


}
