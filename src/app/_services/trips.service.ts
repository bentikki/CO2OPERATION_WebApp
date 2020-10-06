import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUserTripsGQL, GetUserTripsQuery } from 'src/graphql/schema';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  loading: any;
  test: any;
  user: User;
  trips: Observable<GetUserTripsQuery['userById']>;
  constructor(
    private tripGQL: GetUserTripsGQL,
    private userService: UserService
  ) {
    console.log('user Service',this.userService.getUser);
      this.trips = tripGQL.watch({userId: 1}).valueChanges.pipe(map(result => result.data.userById));
      console.log('trips', this.trips)
    
  }

  getAll() {
    return this.trips;
  }
}
