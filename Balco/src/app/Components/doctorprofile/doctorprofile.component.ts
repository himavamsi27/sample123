import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
  id : string| undefined
  constructor(private shared : MainserviceService) { }

  ngOnInit(): void {
    this.id = this.shared.getDoctorListId();
    
  }

}
