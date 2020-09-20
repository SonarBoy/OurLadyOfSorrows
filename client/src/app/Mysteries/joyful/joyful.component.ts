import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mystery } from '../../model/mystery.model';
import { RosaryServiceService } from '../../service/rosary-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as localRosaryData from '../../../assets/localData/joyful.json';
localRosaryData.default.joyfulList;

@Component({
  selector: 'app-joyful',
  templateUrl: './joyful.component.html',
  styleUrls: ['./joyful.component.css']
})
export class JoyfulComponent implements OnInit {

  joyfulMystery: Mystery[];
  joyfulMysteryBackup: Object;

  //view:boolean = true;
  private __jsonURL = 'http://localhost:4200/assets/tester.json';
  
  private httpOptionsJoyful = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
    })
  }
  

  constructor(
    private joyful:RosaryServiceService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.joyfulMystery = new Array<Mystery>(); 
    this.displayJoyfulList();

   

    

    // this.http.get(this.__jsonURL,this.httpOptionsJoyful).subscribe(data => {
    //   //console.log(data)

    //   this.joyfulMysteryBackup = data;

    //   console.log(this.joyfulMysteryBackup);
    // });
    /*
    this.getJSON().subscribe(data =>{
      console.log(data);
    })

    */
  }


  public getJSON():Observable<any>{
    return this.http.get(this.__jsonURL,this.httpOptionsJoyful);
  }

  displayJoyfulList(){
    this.joyful.getJoyfulList().subscribe(data =>{

      if(data.success){
        console.log(data);
        this.joyfulMystery = data.joyfulList;
        
      }else{
        console.warn("Fallback to local .json");
        this.joyfulMystery = localRosaryData.default.joyfulList;

      }

     

      
    });
  }

}
