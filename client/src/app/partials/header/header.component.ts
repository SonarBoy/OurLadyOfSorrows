import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.setUpAnalytics();
  }

  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
            gtag('config', 'G-70BT98MXQ3',
                {
                    page_path: event.urlAfterRedirects
                }
            );
        });
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
