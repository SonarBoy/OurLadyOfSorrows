import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

//Mysteries
/*
import { Joyful } from '../Mysteries/joyful';
import { Sorrowful } from '../Mysteries/sorrowful';
import { Glorious } from '../Mysteries/glorious';
import { Luminous } from '../Mysteries/luminous';
*/


@Injectable({
  providedIn: 'root'
})
export class RosaryServiceService {
  private joyfulPoint = 'http://localhost:3000/api/joyful';
  private sorrowfulPoint = 'http://localhost:3000/api/sorrowful';
  private gloriousPoint = 'http://localhost:3000/api/glorious';
  private luminousPoint = 'http://localhost:3000/api/luminous';


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
