import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showTravelStats : boolean = true;

  constructor() { }

  ngOnInit(): void {
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
