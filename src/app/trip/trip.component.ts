import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Trip } from '../../graphql/schema';
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

   }

  ngOnInit(): void {
    
  }

}
