import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCarComponent } from './register-car/register-car.component';
import { RegisterPlateComponent } from './register-plate/register-plate.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_services/auth.guard';
import { NewUserGuard } from './_services/newuser.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NewUserGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NewUserGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'register', component: RegisterComponent, canActivate: [NewUserGuard] },
  { path: 'register/car', component: RegisterCarComponent, canActivate: [NewUserGuard] },
  { path: 'register/license', component: RegisterPlateComponent, canActivate: [NewUserGuard] },


  // otherwise redirect to main page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
