import { Component, OnInit } from '@angular/core';
import { ProjservService } from '../projserv.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesserve: ProjservService) { 
    // this.getSeries()
  }

  ngOnInit(): void {
  }
  // getSeries(){
  //   this.seriesserve.getSeries().subscribe(res=>{

  //   })
  // }
}


  
