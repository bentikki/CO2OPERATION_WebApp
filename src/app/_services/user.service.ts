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
    
    console.log(this.userSubject.value);
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
    let url = 'https://jsonplaceholder.typicode.com/users'; 
    var encrypted = this.encryptService.set(password);

    return this.http.post<User>(url, { email, encrypted })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          if(user.email == "fail@fail.com"){ // Temp. Must be false if wrong credentials. 
            return false;
          }
          
          // Saves user object in session. 
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
    }));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
