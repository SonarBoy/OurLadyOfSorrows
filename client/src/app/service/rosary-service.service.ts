import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Mystery } from '../model/mystery.model';


@Injectable({
  providedIn: 'root'
})
export class RosaryServiceService {
  
  private joyfulPoint = 'https://our-lady-of-sorrow.herokuapp.com/api/Rosary/joyful';
  private sorrowfulPoint = 'https://our-lady-of-sorrow.herokuapp.com/api/Rosary/sorrowful';
  private gloriousPoint = 'https://our-lady-of-sorrow.herokuapp.com/api/Rosary/glorious';
  private luminousPoint = 'https://our-lady-of-sorrow.herokuapp.com/api/Rosary/luminous';
  

  
  private __jsonURL = 'http://localhost:4200/assets/tester.json';

  /*
  private joyfulPoint = 'http://localhost:3000/api/Rosary/joyful';
  private sorrowfulPoint = 'http://localhost:3000/api/Rosary/sorrowful';
  private gloriousPoint = 'http://localhost:3000/api/Rosary/glorious';
  private luminousPoint = 'http://localhost:3000/api/Rosary/luminous';
  */

  private httpOptionsJoyful = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
    })
  }

  private httpOptionsSorrowful = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
    })
  }

  private httpOptionsGlorious = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
    })
  }

  private httpOptionsLuminous = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
    })
  }

  constructor(private http: HttpClient) { }

  public getJoyfulList(): Observable<any>{
    return this.http.get<any>(this.joyfulPoint,this.httpOptionsJoyful)
    .pipe(catchError(this.handleError<any>('getJoyfulList',[])));
  }

  public getSorrowfulList():Observable<any>{
    return this.http.get<any>(this.sorrowfulPoint,this.httpOptionsSorrowful);
  }

  public getGloriousList():Observable<any>{
    return this.http.get<any>(this.gloriousPoint,this.httpOptionsGlorious);
  }

  public getLuminousList():Observable<any>{
    return this.http.get<any>(this.luminousPoint,this.httpOptionsLuminous);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    
    return (error: any): Observable<any> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: ${error.message}`); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
