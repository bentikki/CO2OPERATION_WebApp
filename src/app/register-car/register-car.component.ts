import { Component, OnInit } from '@angular/core';
import { SignupService } from '../_services/signup.service';

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

  constructor(
    private signupService : SignupService
  ) 
  { 
    this.Heading = "Køretøj";
    this.Icon = "directions_car";

    this.PrevPage = "register";
    this.NextPage = "register/car";    
  }

  ngOnInit(): void {
  }

  carYesNo(haveCar : boolean): void{
    this.signupService.registerCar(haveCar);
  }

}
