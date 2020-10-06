import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';

const GetTripsByUserId = gql`
  query GetTripsByUserId {
    userById(id: 1){
      id
    cars {
      id
      model
    }
    trips {
      id
      transportMethodId
      distance
    }
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  userGql: any;

  private querySub: Subscription;
  
  public showTravelStats : boolean;

  user: User;

  constructor(private userService: UserService, private apollo: Apollo) {
      this.user = this.userService.getUser;
  }

  ngOnInit(): void {
    this.querySub = this.apollo.watchQuery<any>({
      query: GetTripsByUserId
    })
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      console.log('Data før assign',data);
      this.userGql = data;
      console.log('Data efter assign', this.userGql);
    });
    console.log(this.userService.getUser);
    console.log('Data after query run.', this.userGql);
  }

  public showTravel() : void {
    if(this.showTravelStats){
      this.showTravelStats = false;
    }
    else{
      this.showTravelStats = true;
    }
  }

  public logout(){
    console.log("logging out");
    this.userService.logout();
  }
}
