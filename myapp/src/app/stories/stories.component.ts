import { Component, OnInit } from '@angular/core';
import { ProjservService } from '../projserv.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private storiesserve : ProjservService) {
    // this.getStories()
   }

  ngOnInit(): void {
  }
// getStories(){
//   this.storiesserve.getStories().subscribe(res=>{
//     console.log(res)
//   })
// }
}

