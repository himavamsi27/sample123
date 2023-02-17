import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }
  public getBill(): Observable<bill[]>{
    return this.http.get<bill[]>('http://localhost:8080/api/getbill');
  }
  
    public addBill(bill: bill): Observable<object>{
        return this.http.post('http://localhost:8080/api/addbill',bill);
    }
}
