import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-plate',
  templateUrl: './register-plate.component.html',
  styleUrls: ['./register-plate.component.scss']
})
export class RegisterPlateComponent implements OnInit {

  PrevPage : String;
  NextPage : String;

  Heading : String;
  Icon : String;

  constructor() 
  { 
    this.Heading = "Registrer køretøj";
    this.Icon = "directions_car";

    this.PrevPage = "register/car";
    this.NextPage = "home";
  }

  ngOnInit(): void {
  }

}
