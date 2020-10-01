import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  get f() { return this.loginForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private accountService: UserService,
    private router: Router,) 
    {  

    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', Validators.required]
    });
  }

  
  login() : void{
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log(this.f.email.errors)
      //Invalid data has been entered
      return;
    }

    
    this.accountService.login(this.f.email.value, this.f.password.value)
      .subscribe(userData => {
        if(userData){
          // this.router.navigate(['/home?userID=' + userData.Id]);
          //this.router.navigate(['/home?userID=' + userData.Id]);
          this.router.navigate(['/home'], { queryParams: { userID: userData.Id } });
         
        }
        else{
          // An error occured cant login.
          console.log("An error occured. Cannot log in.")
        }
      })

    // this.accountService.login(this.f.email.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       if(data){
    //         this.router.navigate(['/home?userID='+ data.Id]);
    //       }
    //       else{
    //         // Wrong credentials entered.
    //         console.log("Wrong credentials");
    //       }
    //     },
    //     (error) => {
    //       //An unexpected error has occured. Eg. an connection issue. 
    //       console.log("An error occured login.component");
    //     }
    //   );
  }

}
