import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  path:ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}


  canActivate(): boolean{

    if(this.authService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }



  //PLEASE DOCUMENT THIS METHOD TO UNDERSTAND IT BETTER 
  //DUE DATA FEB, 28, 2020.
  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
  
}
