import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OurLadyOfSorrows';

  constructor(private router: Router) {
  }
  
  ngOnInit() {
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
}
