import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BookappointmentComponent } from './Components/bookappointment/bookappointment.component';
import { DoctorlistComponent } from './Components/doctorlist/doctorlist.component';
import { HomebodyComponent } from './Components/homebody/homebody.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TesingComponent } from './Components/tesing/tesing.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'testing', component:TesingComponent},
  {path:'doctorlist', component:DoctorlistComponent},
  {path:'signup', component:SignupComponent},
  {path:'bookappoinment', component:BookappointmentComponent},
  {path:'home', component:HomebodyComponent},
  {path: 'about', component:AboutComponent},
  {path:'', component:HomebodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
