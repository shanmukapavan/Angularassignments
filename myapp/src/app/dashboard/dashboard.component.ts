import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProjservService } from '../projserv.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  id: number;
  title: string;
  digitalId: number;
  issueNumber: number;
  variantDescription: string;
}

export interface periodicCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {};
}
export interface periodicEvent {
  id: number;
  Title: string;
  description: string;
  resourceURL: string;
}
export interface periodicStories {
  id: number;
  title: string;
  description: string;
  resourceURL: string; 
}
export interface periodicSeries{
  id: number;
  title: string;
  description : string;
  resourceURI: string;


}
export interface periodiccreaters{
  id:number;
  firstName:string;
  middleName:string;
  lastName:string;
  suffix:string;

}

let Character = {};
let comic = {};
let Events = {};
let creaters = {};
let series = {};
let stories = {};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit  {
  //datasource: MatTableDataSource<any>;
  
  comicsHide: boolean = false;
  //  ELEMENT_DATA: PeriodicElement[] = [
  //   {id: 1, title: 'Hydrogen',digitalId:10, issueNumber: 1.0079, variantDescription: 'H'},

  // ];
  charactersHide: boolean = false;

  public CharactersList: any;
  public comicList: any;
  public eventsList: any;
  public storiesList: any;
  public seriesList: any;
  public creatersList: any;
  
  dataSource: any = [];
  datasource: any = [];
  source: any = [];
  data: any = [];
  Data: any =[];
  Source: any=[];

  constructor(private service: ProjservService) {
    //this.dataSource.paginator = this.paginator;
    let Character = this.service.get();
    let comic = this.service.getComic();
    let events = this.service.getEvents();
    let stories = this.service.getStories();
    let series = this.service.getSeries();
    let creaters = this.service.getCreaters();
    forkJoin([
      Character,
      comic,
      events,
      stories,
      series,
      creaters,
    ]).subscribe((res) => {
      this.CharactersList = res[0].data.results;
      this.comicList = res[1].data.results;
      this.eventsList = res[2].data.results;
      this.storiesList = res[3].data.results;
      this.seriesList = res[4].data.results;
      this.creatersList = res[5].data.results;
      this.ShowChsrscters();
      // this.ShowCharacters = true;
      // this.dataSource = this.CharactersList;
      // this.dataSource.paginator = this.paginator;
      // this.dataSource = this.comicList;
      // this.datasource = this.eventsList;
      // this.datasource = this.storiesList;

      //  this.source=this.CharactersList;
      console.log('test', res[5]);
    });
  
  }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
  
  }

  displayedColumns = [
    'id',
    'title',
    'digitalId',
    'issueNumber',
    'variantDescription',
  ];

  public ShowComics: boolean = false;
  public ShowCharacters: boolean = false;
  public ShowEvents: boolean = true;
  public ShowStories: boolean = false;
  public ShowSeries : boolean = false;
  public ShowCreaters:boolean = false;

  comics() {
    this.ShowEvents = false;
    this.ShowStories = false;
    this.ShowCharacters = false;
    this.ShowComics = true;
    this.dataSource = this.comicList;
    
    console.log('test', this.comicList);
  }

  displayedCharacterColumns = [
    'id',
    'name',
    'description',
    'modified',
    'thumbnail',
  ];

  ShowChsrscters() {
    this.ShowComics = false;
    this.ShowEvents = false;
    this.ShowStories = false;
    this.ShowCharacters = true;
    this.dataSource = this.CharactersList;
    
    console.log('test', this.CharactersList);
  }
  displayedEventColumns = ['id', 'title', 'description', 'resourceURL'];

  events() {
    this.ShowEvents = true;
    this.ShowComics = false;
    this.ShowCharacters = false;
    this.ShowStories = false;
    this.datasource = this.eventsList;
    
    console.log('test', this.eventsList);
  }
  displayedStoriesColumns = ['id', 'title', 'description', 'resourceURL'];

  stories() {
    this.ShowStories = true;
    this.ShowComics = false;
    this.ShowCharacters= false;
    this.ShowEvents=false;
    this.dataSource = this.storiesList;
    
    console.log('test', this.storiesList);
  }
  displayedSeriesColumns =['id', 'title','description','resourceURI'];

  Series(){
    this.ShowStories = false;
    this.ShowComics = false;
    this.ShowCharacters= false;
    this.ShowEvents=false;
    this.ShowSeries=true;
    this.dataSource = this.seriesList;
   
    console.log('test',this.seriesList);
  }
  displayedCreatersColumns = ['id','firstName','middleName','lastName','suffix'];

  Creaters(){
    this.ShowStories = false;
    this.ShowComics = false;
    this.ShowCharacters= false;
    this.ShowEvents=false;
    this.ShowSeries=false;
    this.ShowCreaters=true;
    this.dataSource = this.creatersList;
    console.log(this.dataSource)
    console.log('creators',this.creatersList);

  }
  
}
