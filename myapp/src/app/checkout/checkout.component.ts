import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup
  constructor(private fb:FormBuilder) { 
    this.checkoutForm = this.fb.group({
      email:['',Validators.required],
    password:['',Validators.required],
    })
  }

  ngOnInit(): void {
  this.checkoutForm.valueChanges.subscribe(console.log)
  }
          
  
  getData() {
     console.log(this.checkoutForm);
   }
  

}
