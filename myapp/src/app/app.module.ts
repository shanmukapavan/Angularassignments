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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InternalComponent,
    DataBindingComponent,
    FormsComponent,
    CheckoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [
    {provide : LocationStrategy, useClass : HashLocationStrategy}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
