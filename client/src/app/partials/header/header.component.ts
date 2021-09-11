import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'xx-xxxxx-xx', 
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }
    }
   }

  ngOnInit() {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onLogoutClick(){
    this.authService.logout().subscribe(data =>{
      if(data.success){
        console.log("Logout Successful");
      }else{
        console.log(data.error);
      }
    });
  }

  isLoggedIn(): boolean{
    return this.authService.loggedIn();
  }

}
