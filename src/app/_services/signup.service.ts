import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  checkUsernameTaken(value : any){
    return this.http.get('https://5f70c87cbdb178001633c35e.mockapi.io/api/UserExists/' + value).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
}
