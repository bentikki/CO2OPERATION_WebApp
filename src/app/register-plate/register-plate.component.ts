import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../_services/signup.service';
import { LicenseplateService } from '../_services/licenseplate.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { LicenseInfo } from '../models/licenseinfo';


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

  private licenseInfo: LicenseInfo;

  constructor(
    private formBuilder: FormBuilder,
    private signupService : SignupService,
    private licenseService: LicenseplateService
  ) 
  { 
    this.Heading = "Registrer køretøj";
    this.Icon = "directions_car";

    this.PrevPage = "register/car";
    this.NextPage = "home";
  }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
        model: ['', Validators.required],
        license: ['', Validators.required]
      },
    );

  }

  saveInfo(){
    if(this.Form.valid){
      this.signupService.registerPlate(this.licenseInfo);
    }
  }

  checkLicense(e){
    const inputVal = e.target.value.replace(/\s/g, "");

    if(inputVal.length == 7){

      console.log("Reached 7");
      
      this.licenseService.getLicenseInfo(inputVal)
        .pipe(first())
        .subscribe(data => {
          this.licenseInfo = data;
          this.Form.controls['model'].setValue(this.licenseInfo.model);
        });
    }

  }
  

}
