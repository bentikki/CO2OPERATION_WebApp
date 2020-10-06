import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { Trip } from '../../graphql/schema';

import { TripsService } from '../_services/trips.service';
import { GetUserTripsQuery } from 'src/graphql/schema';



@Component({
  selector: 'app-show-travel',
  templateUrl: './show-travel.component.html',
  styleUrls: ['./show-travel.component.scss']
})
export class ShowTravelComponent implements OnInit {

  public Trips: Trip[] = [] ;

  constructor(
    private tripsService : TripsService) 
    {  
    }

  ngOnInit(): void {

    this.tripsService.getAll()
      .pipe(first())
      .subscribe(trips => this.Trips = trips.trips);

  }

}
