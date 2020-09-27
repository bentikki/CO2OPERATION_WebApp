import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';


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
    private http: HttpClient
  ) 
  { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public login(email : string, password : string){

    //Url for login authorization. With temp url for testing.
    let url = 'https://jsonplaceholder.typicode.com/users'; 

    return this.http.post<User>(url, { email, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          if(user.email == "fail@fail.com"){ // Temp. Must be false if wrong credentials. 
            return false;
          }

          // Saves user object in session. 
          localStorage.setItem('user', JSON.stringify(user));
          return user;
    }));

  }

}
