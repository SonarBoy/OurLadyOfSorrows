import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mystery } from '../../model/mystery.model';
import { RosaryServiceService } from '../../service/rosary-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-joyful',
  templateUrl: './joyful.component.html',
  styleUrls: ['./joyful.component.css']
})
export class JoyfulComponent implements OnInit {

  joyfulMystery: Mystery[];
  
  private __jsonURL = 'http://localhost:4200/assets/tester.json';


  constructor(
    private joyful:RosaryServiceService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.joyfulMystery = new Array<Mystery>();
    
    this.displayJoyfulList();

    /*
    this.getJSON().subscribe(data =>{
      console.log(data);
    })

    */
  }


  public getJSON():Observable<any>{
    return this.http.get(this.__jsonURL);
  }

  displayJoyfulList(){
    this.joyful.getJoyfulList().subscribe(data =>{

      if(data.success){
        console.log(data);
        this.joyfulMystery = data.joyfulList;
      }

     

      
    });
  }

}
