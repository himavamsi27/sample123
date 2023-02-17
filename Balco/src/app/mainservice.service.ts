import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  DoctorListId : string | undefined
  doclistUrl="http://localhost:8080/api/getdoctor"
  constructor(private httpClient:HttpClient) { }

  getAllDoctors():Observable<object>{    
    return this.httpClient.get(this.doclistUrl)
}
  setDoctorListId(data: string | undefined){
    this.DoctorListId = data
  }
  
  getDoctorListId(){ return this.DoctorListId }
}
