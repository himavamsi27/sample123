import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Patient';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patient : Patient = new Patient();
  id : number;
  email : string;
  password : string;
  name : string;
  checkEmail : string
  constructor(private patientService : PatientService, public route:Router) { }

  ngOnInit(): void {
  }

  onclickcheck(){
    this.email = this.patient.patientEmail;
    this.password = this.patient.patientPassword;
    console.log(this.patient.patientEmail);
    console.log(this.patient.patientPassword);
    this.id = this.patient.pid;
    console.log(this.patient.pid);

    this.logincheck();
    //this.route.navigate(['bookappoinment'])
  }



  logincheck(){
    this.patientService.findById(this.id).subscribe((data)=>{
      // console.log(data[0].patientEmail)
      console.log(this.email);
       console.log(data)
//     this.checkEmail = data[0].patientEmail;
     console.log(this.checkEmail)
      if(this.email === this.patient.patientEmail)
      {
        console.log("true");
        //return this.route.navigate(['bookappoinment'])
        alert("Login Successfull.")
        this.success();
      }
      else{
        alert("Wrong Credentials")
        console.log("false");
        this.perror();
      }

      
    },
    (error)=>{
      alert("Wrong")
    })
  }

  perror(){
    
    this.route.navigate(['login'])
    return null;
  }
  
  success(){
    this.route.navigate(['bookappoinment'])
    return null;
  }

}
