import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mystery } from '../../model/mystery.model';
import { RosaryServiceService } from '../../service/rosary-service.service';
import * as localRosaryData from '../../../assets/localData/glorious.json';
localRosaryData.default.gloriousList;

@Component({
  selector: 'app-glorious',
  templateUrl: './glorious.component.html',
  styleUrls: ['./glorious.component.css']
})
export class GloriousComponent implements OnInit {

  gloriousMystery: Mystery[];

  constructor(
    private glorious:RosaryServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.gloriousMystery = new Array<Mystery>();
    this.displayGloriousList();
  }

  displayGloriousList(){
    this.glorious.getGloriousList().subscribe(data =>{

      if(data.success){
        console.log(data);
        this.gloriousMystery = data.gloriousList;
      }else{
        console.warn("Fallback to local .json");
        this.gloriousMystery = localRosaryData.default.gloriousList;
      }

    });
  }

}
