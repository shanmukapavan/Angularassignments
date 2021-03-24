import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{  HttpClient  }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjservService {
  
  constructor(private http : HttpClient) { }
  get ():Observable<any> {
    return this.http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=007d97c88c8e904fe46b1c786296aa88")

  }
  getComic():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/comics?apikey=007d97c88c8e904fe46b1c786296aa88")
  }
  getEvents():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/events?apikey=007d97c88c8e904fe46b1c786296aa88")
  }
  getSeries():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/series?apikey=007d97c88c8e904fe46b1c786296aa88")
  }
getStories():Observable<any>{
  return this.http.get("https://gateway.marvel.com:443/v1/public/stories?apikey=007d97c88c8e904fe46b1c786296aa88")
}
getCreaters():Observable<any>{
  return this.http.get("https://gateway.marvel.com:443/v1/public/creators?apikey=007d97c88c8e904fe46b1c786296aa88")
}
}

