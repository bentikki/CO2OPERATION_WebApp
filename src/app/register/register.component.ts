import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SignupService } from '../_services/signup.service';
import { ComparePassword } from '../_validators/comparepassword.validator'
import { uniqueUsernameValidator, UniqueUsernamceValidatorDirective } from '../_validators/uniqueUser.validator'

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

  Form: FormGroup;
  get f() { return this.Form.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService
  ) 
  { 
    this.Heading = "Opret bruger";
    this.Icon = "account_circle";

    this.PrevPage = "login";
    this.NextPage = "register/car";
  }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', 
        [
          Validators.required,
          Validators.email,
          // uniqueUsernameValidator(this.signupService)
        ]
      ],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    },
    {
      validator: 
      [
        ComparePassword("password", "passwordRepeat"),
      ]

    }
  );

    console.log(this.Form);
  }

}

export function ValidateUniqueEmail(control: AbstractControl) {

  if (control.value == "test@mail.com") {
    return { emailNotUnique: true };
  }
  return null;

}

