import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mystery } from '../../model/mystery.model';
import { RosaryServiceService } from '../../service/rosary-service.service';
import * as localRosaryData from '../../../assets/localData/luminous.json';
localRosaryData.default.luminousList;


@Component({
  selector: 'app-luminous',
  templateUrl: './luminous.component.html',
  styleUrls: ['./luminous.component.css']
})
export class LuminousComponent implements OnInit {

  luminousMystery: Mystery[];

  constructor(
    private luminous: RosaryServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.luminousMystery = new Array<Mystery>();
    this.displayLuminousList();
  }

  displayLuminousList(){
    this.luminous.getLuminousList().subscribe(data =>{

      if(data.success){
        console.log(data);
        this.luminousMystery = data.luminousList;
      }else{
        console.warn("Fallback to local .json");
        this.luminousMystery = localRosaryData.default.luminousList;
      }

    });
  }

}
