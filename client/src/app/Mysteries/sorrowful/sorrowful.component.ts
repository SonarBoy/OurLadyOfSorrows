import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mystery } from '../../model/mystery.model';
import { RosaryServiceService } from '../../service/rosary-service.service';


@Component({
  selector: 'app-sorrowful',
  templateUrl: './sorrowful.component.html',
  styleUrls: ['./sorrowful.component.css']
})
export class SorrowfulComponent implements OnInit {

  sorrowfulMystery: Mystery[];

  constructor(
    private sorrowful:RosaryServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sorrowfulMystery = new Array<Mystery>();  
    this.displaySorrowfulList();
  }

  displaySorrowfulList(){
    this.sorrowful.getSorrowfulList().subscribe(data =>{

      if(data.success){
        console.log(data);
        this.sorrowfulMystery = data.sorrowfulList; 
      }else{
        this.sorrowfulMystery =null;
      }

    });
  }

}
