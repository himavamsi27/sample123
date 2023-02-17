import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { DoctorService } from 'src/app/doctor.service';
import { MainserviceService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  public loading:boolean=false
  
  public errormsg:string|null=null
  public doctors: Doctor[]| any;
  constructor(private doctorService: DoctorService, private shared : MainserviceService) { console.log.apply(this.doctors);}

  ngOnInit(): void {
    this.getDoctors();
  }

  public getDoctors(): void{
    this.doctorService.getDoctors().subscribe((data)=>{
      this.doctors=data;
    console.log(this.doctors,"hii")
    //console.log(this.doctors.ImageUrl)
    this.loading=false
    },error=>{
    this.errormsg=error;
    this.loading=false
    }
    )
    console.log(this.doctors);
  }

  // passid(){
  //   this.shared.setDoctorListId();
  // }
}
