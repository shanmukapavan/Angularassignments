import { Component, OnInit } from '@angular/core';
import { ProjservService } from '../projserv.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventsserve: ProjservService) { 
    // this.getEvents()
  }

  ngOnInit(): void {
  }
//   getEvents(){
//     this.eventsserve.getEvents().subscribe(res=>{
    
//       console.log(res)
//   })

// }
}
