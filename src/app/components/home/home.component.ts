import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl:any='';
  type:any="Passport";
  passportNumber:any="123456789";
  name:any="Doe";
  dob:any="22-08-1989";
  email:any="";
  gender:any="Male";
  alternateNumber:any="234255422";
  addressLine1:any="B-25/44";
  addressLine2:any="New Airtel Office";
  addressLine3:any="Hudson road";
  postalCode:any="110001"
  constructor() { }

  ngOnInit() {

  }

}
