import { Component, OnInit } from '@angular/core';
import { bill } from 'src/app/bill';
import { BillService } from 'src/app/bill.service';
import { Patient } from 'src/app/Patient';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-tesing',
  templateUrl: './tesing.component.html',
  styleUrls: ['./tesing.component.css']
})
export class TesingComponent implements OnInit {
  Bill : bill = new bill();
  constructor(public billService: BillService) { }

  ngOnInit(): void {
  }

  billbuttonclick(){
    console.log(this.Bill)
    this.billSave()
  }
  billSave(){
    
    this.billService.addBill(this.Bill).subscribe(data =>{
      console.log(data)
      console.log(this.Bill)
      alert("added Su");
      //this.router.navigate(['bookappoinment'])
    });
      }

 

}
