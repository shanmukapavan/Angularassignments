import { Component, OnInit } from '@angular/core';
import { mdlUserData } from '../Models/userData';
import { StringifydateService } from '../services/stringifydate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  public Name:string="";
  public Numbers:number[] = [];
  public details:mdlUserData = new mdlUserData();
  constructor(public stringifydate:StringifydateService) { 
    this.stringifydate.stringifyDate();
    console.log(this.Name);
    this.test();
  }

  ngOnInit(): void {
  }

  test(){
    this.Numbers=[1,2,3,4,5,6,7,8,9,10];
    //alert("HI");
    this.details.name = "pawan";
    this.details.age = "23";
    this.details.phone = "9010569411";

  }

  EventFunction(){
    this.details.name = "shanmuk";
  }


}
