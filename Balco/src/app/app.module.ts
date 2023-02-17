import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { TesingComponent } from './Components/tesing/tesing.component';
import { DoctorlistComponent } from './Components/doctorlist/doctorlist.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DoctorprofileComponent } from './Components/doctorprofile/doctorprofile.component';
import { HomebodyComponent } from './Components/homebody/homebody.component';
import { BookappointmentComponent } from './Components/bookappointment/bookappointment.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { AboutComponent } from './Components/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TesingComponent,
    DoctorlistComponent,
    SignupComponent,
    DoctorprofileComponent,
    HomebodyComponent,
    BookappointmentComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
