import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RosaryServiceService {
  //private sorrowfulPoint = 'https://our-lady-of-sorrow.herokuapp.com/api/Rosary/sorrowful';
  private joyfulPoint = 'http://localhost:3000/api/Rosary/joyful';
  private sorrowfulPoint = 'http://localhost:3000/api/Rosary/sorrowful';
  private gloriousPoint = 'http://localhost:3000/api/Rosary/glorious';
  private luminousPoint = 'http://localhost:3000/api/Rosary/luminous';


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
    return this.http.get<any>(this.joyfulPoint,this.httpOptionsJoyful);
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
}
