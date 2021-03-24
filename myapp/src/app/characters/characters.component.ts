import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ProjservService } from '../projserv.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private serve :ProjservService) {
    // this.getCharacter()
  }
  
  

  ngOnInit(): void {
  }
    // getCharacter(){
    //  this.serve.get().subscribe(res=>{
    //    console.log(Response);
    //  })


    // }
  }
