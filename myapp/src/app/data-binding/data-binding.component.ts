import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { userJsonData } from '../Models/jsonData'
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public i : Number = 0
  public data =[] = [{"id":1,"first_name":"Bernetta","last_name":"Sivills","email":"bsivills0@aboutads.info"},
  {"id":2,"first_name":"Theresita","last_name":"Dunbleton","email":"tdunbleton1@foxnews.com"},
  {"id":3,"first_name":"Shurlocke","last_name":"Scrauniage","email":"sscrauniage2@ebay.com"},
  {"id":4,"first_name":"Laurie","last_name":"Townes","email":"ltownes3@fc2.com"},
  {"id":5,"first_name":"Egbert","last_name":"Spadollini","email":"espadollini4@theatlantic.com"},
  {"id":6,"first_name":"Cornelle","last_name":"Teeney","email":"cteeney5@hugedomains.com"},
  {"id":7,"first_name":"Paule","last_name":"Baszkiewicz","email":"pbaszkiewicz6@berkeley.edu"},
  {"id":8,"first_name":"Washington","last_name":"Chevolleau","email":"wchevolleau7@gov.uk"},
  {"id":9,"first_name":"Courtney","last_name":"Lang","email":"clang8@hubpages.com"},
  {"id":10,"first_name":"Fidelio","last_name":"Stannering","email":"fstannering9@weather.com"}
]
  public user:userJsonData = new userJsonData()
  constructor() {
    this.userData()
  }

  ngOnInit(): void {
  }
  userData(){
    this.user.id = this.data[0].id;
    this.user.first_name = this.data[0].first_name;
    this.user.last_name = this.data[0].last_name;
    this.user.email = this.data[0].email;
    
  }
}
