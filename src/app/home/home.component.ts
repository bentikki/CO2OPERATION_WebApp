import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public showTravelStats : boolean;

  user: User;

  constructor(private userService: UserService) {
      this.user = this.userService.getUser;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('userIDtest'));
  }

  public showTravel() : void {
    if(this.showTravelStats){
      this.showTravelStats = false;
    }
    else{
      this.showTravelStats = true;
    }
  }

}
