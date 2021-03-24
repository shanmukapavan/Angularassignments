import { Component, OnInit } from '@angular/core';
import { ProjservService } from '../projserv.service';

@Component({
  selector: 'app-creaters',
  templateUrl: './creaters.component.html',
  styleUrls: ['./creaters.component.css']
})
export class CreatersComponent implements OnInit {

  constructor(private creatersserve : ProjservService) {
    // this.getCreater()
   }

  ngOnInit(): void {
  }
  // getCreater(){
  //   this.creatersserve.getCreater().subscribe(res=>{
  //     console.log(res)
  //   })
  // }

}
