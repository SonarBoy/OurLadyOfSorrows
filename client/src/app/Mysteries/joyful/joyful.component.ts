import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mystery } from '../../model/mystery.model';
import { RosaryServiceService } from '../../service/rosary-service.service';
@Component({
  selector: 'app-joyful',
  templateUrl: './joyful.component.html',
  styleUrls: ['./joyful.component.css']
})
export class JoyfulComponent implements OnInit {

  joyfulMystery: Mystery[];

  constructor(
    private joyful:RosaryServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.joyfulMystery = new Array<Mystery>();
    this.displayJoyfulList();
  }

  displayJoyfulList(){
    this.joyful.getJoyfulList().subscribe(data =>{

      if(data.success){
        console.log(data);
        this.joyfulMystery = data.joyfulList;
      }else{
        this.joyfulMystery = null;
      }
    });
  }

}
