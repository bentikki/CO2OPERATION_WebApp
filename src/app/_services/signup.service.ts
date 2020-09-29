import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SignUpModel } from '../models/sign-up-model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { EncrDecrService } from './encr-decr.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  
  private _signUpModel: SignUpModel = new SignUpModel();
  // public get signUpModel() : SignUpModel {
  //   return this._signUpModel;
  // }
  

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private encryptService: EncrDecrService
  ) { }

  checkUsernameTaken(value : any){
    return this.http.get('https://5f70c87cbdb178001633c35e.mockapi.io/api/UserExists/' + value).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }

  public registerPage(email: string, password: string){
    this._signUpModel.email = email;
    this._signUpModel.password = this.encryptService.set(password);

    this.router.navigate(['/register/car']);
  }

  public registerCar(carYesNo: boolean){
    this._signUpModel.haveCar = carYesNo;
    
    if(!this._signUpModel.haveCar){
      this.createSignup();
    }
    else{
      this.router.navigate(['/register/license']);
    }
  }

  public registerPlate(modelName: string){
    this._signUpModel.carModel = modelName;

    if(this._signUpModel.haveCar){
      this.createSignup();
    }

  }

  private createSignup(){
    console.log("sending signup");

    // Create user api call
    //let url = 'https://5f70c87cbdb178001633c35e.mockapi.io/api/createUser';
    let url = 'https://172.16.21.44/api/login/CreateUser';
    //https://172.16.21.44/api/login/CreateUser/?userMail=zbcanols21@zbc.dk&Password=Kode123!&haveCar=true&carModel=BMW


    this.http.get<any>('http://172.16.21.44/api/login/login')
      .subscribe( data => {
        console.log(data);
      })
    //http://172.16.21.44/api/login/login

    return this.http.post<SignUpModel>(url, 
      { 
        userMail: this._signUpModel.email,
        Password: this._signUpModel.password,
        haveCar: this._signUpModel.haveCar,
        carModel: this._signUpModel.carModel 
      })
      .subscribe(data => {
          console.log(data);
          this.userService.login(this._signUpModel.email, this._signUpModel.password)
            .subscribe(userData => {
              if(userData){
                this.router.navigate(['/home']);
              }
            })
      })

  }

}
