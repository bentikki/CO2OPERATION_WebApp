import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SignUpModel } from '../models/sign-up-model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { EncrDecrService } from './encr-decr.service';
import { LicenseInfo } from '../models/licenseinfo';

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
    //this._signUpModel.password = this.encryptService.set(password);
    this._signUpModel.password = password;

    this.getPosition().then(pos=>
      {
          this._signUpModel.userLat = pos.lat;
          this._signUpModel.userLng = pos.lng;
          this.router.navigate(['/register/car']);
      });

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

  public registerPlate(licenseInfo: LicenseInfo){
    this._signUpModel.licenseInfo = licenseInfo;
    
    if(this._signUpModel.haveCar){
      this.createSignup();
    }

  }

  

  private createSignup(){

    // Create user api call
    let url = 'https://172.16.21.44/api/UserPortal/CreateUser/';


    url += '?userMail=' + this._signUpModel.email;
    url += '&Password=' + this._signUpModel.password;
    url += '&haveCar=' + this._signUpModel.haveCar;
    url += '&carModel=' + this._signUpModel.licenseInfo.model;
    //url += '&emission=' + this._signUpModel.licenseInfo.carbonFootprint;
    url += '&lat=' + this._signUpModel.userLat;
    url += '&lon=' + this._signUpModel.userLng;

    console.log("Send in to URL:");
    console.log(url);
    return this.http.get<boolean>(url)
      .subscribe(data => {
          console.log('User signup data');
          console.log(data);
          if(data){
            this.userService.login(this._signUpModel.email, this._signUpModel.password)
              .subscribe(userData => {
                if(userData){
                  this.router.navigate(['/home?userID=' + userData.Id]);
                }
                else{
                  // User login failed.
                  console.log("Login failed.") 
                }
              })
          }
          else{
            // User signup failed.
            console.log("Signup failed.") 
          }
          
      })

  }


  private getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

}
