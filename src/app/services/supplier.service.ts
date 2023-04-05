import { Injectable } from '@angular/core';
import {Supplier} from '../productforms/Supplier';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(public http:HttpClient) { }
  url:String="http://localhost:3001"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  Save(sup:Supplier){
    return this.http.post<Supplier>(this.url+"/getSupplierData",sup);
  }

  GetData()
  {
    return this.http.get<Supplier[]>(this.url+"/getSupplierData");
  }
  
  updateSupplier(sup: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(this.url+"/getSupplierData/"+sup.id, sup);
  }

  // Delete
  delete(sup:Supplier): Observable<any> {
    return this.http.delete<any>("http://localhost:3001/getSupplierData/"+sup.id);
  }
}
