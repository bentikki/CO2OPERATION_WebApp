import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import {  } from 'src/graphql/schema';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const GetCars = gql`
  query allCars{
    cars{
      id
      model
      userId
      averageCo2
    }
  }
`;

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  loading: boolean;
  listOfCars: any[];

  private querySub: Subscription;

  constructor( ) {
   }
  // user = this.statistics.fetch().pipe(map(result => result.data?.userById));
     // this.cars = this.listCars.fetch().pipe(map(result => result.data?.cars));
    // console.log(this.cars);
    // console.log(this.user);
  ngOnInit(): void {
    // this.querySub = this.apollo.watchQuery<any>({
    //   query: GetCars
    // })
    // .valueChanges
    // .subscribe(({ data, loading}) => {
    //   this.loading = loading;
    //   console.log('data', data);
    //   this.listOfCars = data.cars;
    // });
  }
  

  ngOnDestroy() {
    this.querySub.unsubscribe();
  }

}
