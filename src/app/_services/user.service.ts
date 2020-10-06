import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, timestamp } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { EncrDecrService } from '../_services/encr-decr.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  
  public get getUser(): User {
    return this.userSubject.value;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private encryptService: EncrDecrService
  ) 
  { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public login(email : string, password : string){

    //Url for login authorization. With temp url for testing.
    let url = 'https://172.16.21.44/api/UserPortal/login';
    // let url = 'https://localhost:44324/api/UserPortal/login';
    
    url += '?username=' + email;
    url += '&password=' + password;

    return this.http.get<User>(url)
      .pipe(map(user => {
          console.log('user login');
          console.log(user);
          
          if(user.Id != 0){
            // Saves user object in session. 
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            console.log("userid." + user.Id);
            return user;
          }
          else{
            return false;
          } 
    }));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
