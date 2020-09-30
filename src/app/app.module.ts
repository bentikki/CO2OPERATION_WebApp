import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterBarComponent } from './register-bar/register-bar.component';
import { RegisterCarComponent } from './register-car/register-car.component';
import { RegisterHeadingComponent } from './register-heading/register-heading.component';
import { RegisterPlateComponent } from './register-plate/register-plate.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CarbonIconComponent } from './carbon-icon/carbon-icon.component';
import { ShowTravelComponent } from './show-travel/show-travel.component';
import { TripComponent } from './trip/trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidateUsername } from './_validators/uniqueUser.validator';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterBarComponent,
    RegisterCarComponent,
    RegisterHeadingComponent,
    RegisterPlateComponent,
    HomeComponent,
    MenuBarComponent,
    CarbonIconComponent,
    ShowTravelComponent,
    TripComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ValidateUsername],
  bootstrap: [AppComponent]
})
export class AppModule { }
