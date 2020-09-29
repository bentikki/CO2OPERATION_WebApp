import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../_services/signup.service';

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

  Form: FormGroup;
  get f() { return this.Form.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private signupService : SignupService
  ) 
  { 
    this.Heading = "Registrer køretøj";
    this.Icon = "directions_car";

    this.PrevPage = "register/car";
    this.NextPage = "home";
  }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
        model: ['', Validators.required]
      },
    );

  }

  saveInfo(){
    if(this.Form.valid){
      this.signupService.registerPlate(this.f.model.value);
    }

  }

}
