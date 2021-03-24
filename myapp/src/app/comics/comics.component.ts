import { Component, OnInit } from '@angular/core';
import{ProjservService}from '../projserv.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private  comicserve: ProjservService) { 
    // this.getComic()
  }

  ngOnInit(): void {
  }
  // getComic(){
  //   this.comicserve.getComic().subscribe(res=>{
  //     console.log(res)
  //   })
  // }
  
}