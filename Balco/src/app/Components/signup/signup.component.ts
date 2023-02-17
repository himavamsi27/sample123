import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Patient';
import { PatientService } from 'src/app/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
patient : Patient = new Patient();
  constructor(private patientService: PatientService, public router:Router) { }

  ngOnInit(): void {
  }
  onAddPatient(){
   console.log(this.patient)
   
   this.save();
  }
  save(){
    
this.patientService.addPatient(this.patient).subscribe(data =>{
  console.log(data)
  console.log(this.patient)
  alert("Patient Registered Successfully");
  this.router.navigate(['bookappoinment'])
});
  }
}
