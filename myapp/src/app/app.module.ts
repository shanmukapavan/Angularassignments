import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InternalComponent } from './Components/internal/internal.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsComponent } from './forms/forms.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatersComponent } from './creaters/creaters.component';
import { StoriesComponent } from './stories/stories.component';
import { SeriesComponent } from './series/series.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule  }from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule}from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InternalComponent,
    DataBindingComponent,
    FormsComponent,
    CheckoutComponent,
    ProductsComponent,
    CharactersComponent,
    ComicsComponent,
    CreatersComponent,
    StoriesComponent,
    SeriesComponent,
    EventsComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    

    
    
  ],
  providers: [
    {provide : LocationStrategy, useClass : HashLocationStrategy}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
