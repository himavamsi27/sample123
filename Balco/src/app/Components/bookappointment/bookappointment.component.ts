import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { bill } from 'src/app/bill';
import { BillService } from 'src/app/bill.service';
import { Patient } from 'src/app/Patient';
import { PatientService } from 'src/app/patient.service';
import { Doctor } from 'src/app/doctor';
import { DoctorService } from 'src/app/doctor.service';


@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  public loading:boolean=false
  
  public errormsg:string|null=null
  public doctors: Doctor[]| any;
  patient: Patient = new Patient();
  constructor(public patientService :PatientService, public router:Router,private doctorService: DoctorService) { 
    this.getDoctors();
  }

  ngOnInit(): void {
  }
  

  public getDoctors(): void{
    this.doctorService.getDoctors().subscribe((data)=>{
      this.doctors=data;
    console.log(this.doctors,"hii")
    this.loading=false
    },error=>{
    this.errormsg=error;
    this.loading=false
    }
    )
    console.log(this.doctors);
  }



  onclickbook(){
    console.log(this.patient);
    this.book();
  }

  book(){  
  this.patientService.addPatient(this.patient).subscribe(data =>{
console.log(data);
alert("AppoinmentBooked")
  });
  }
}
