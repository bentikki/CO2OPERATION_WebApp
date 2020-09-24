import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCarComponent } from './register-car/register-car.component';
import { RegisterPlateComponent } from './register-plate/register-plate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'register/car', component: RegisterCarComponent },
  { path: 'register/license', component: RegisterPlateComponent },


  // otherwise redirect to main page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
