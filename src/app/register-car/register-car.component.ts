import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.scss']
})
export class RegisterCarComponent implements OnInit {

  PrevPage : String;
  NextPage : String;

  Heading : String;
  Icon : String;

  constructor() 
  { 
    this.Heading = "Køretøj";
    this.Icon = "directions_car";

    this.PrevPage = "register";
    this.NextPage = "register/car";
  }

  ngOnInit(): void {
  }

}
