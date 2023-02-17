import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './Patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  public getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]>('http://localhost:8081/api/patient');
  }
  
    public addPatient(Patient: Patient): Observable<object>{
        return this.http.post('http://localhost:8081/api/addpatient',Patient);
    }
  
    public updatePatient(Patient: Patient): Observable<Patient>{
        return this.http.put<Patient>('${this.apiServerUrl}/doctor/update',Patient);
    }

    public findById(id: number): Observable<Patient[]>{
        return this.http.get<Patient[]>('http://localhost:8081/api/patient/'+id);
    }
  
}
