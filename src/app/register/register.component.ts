import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  PrevPage : String;
  NextPage : String;

  Heading : String;
  Icon : String;

  constructor() 
  { 
    this.Heading = "Opret bruger";
    this.Icon = "account_circle";

    this.PrevPage = "login";
    this.NextPage = "register/car";
  }

  ngOnInit(): void {
  }

}
