import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';
import { Subscription } from 'rxjs';
import { GetUserTripsGQL,  GetUserTripsQuery} from '../../graphql/schema';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

interface userProps {
  user: {
    id: number,
    cars: {
      id: number,
      model: string
    },
    trip: {
      id: number,
      transportMethodId: number,
      distance: number
    }
  }
}

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})

export class TripComponent implements OnInit {
  
  trips: Observable<GetUserTripsQuery['userById']>;
  @Input() trip : Trip;

  private querySub: Subscription;
  
  user: userProps;
  cars: {
    id: number,
    model: string
  }
  tripx: {
    id: number,
    transportMethodId: number,
    distance: number
  }

  constructor(tripsGQL: GetUserTripsGQL) {
    this.trips = tripsGQL.watch({userId: 1}).valueChanges.pipe(map(result => result.data.userById? result.data.userById : undefined));
      console.log(this.trips);
   }
  ngOnInit(): void {
    
  }

}
