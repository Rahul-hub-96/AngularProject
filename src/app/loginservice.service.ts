import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  customerId!:number;
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(public http:HttpClient) { }

   url:string="http://localhost:3000";
   
   logIn()
   {
    return this.http.get<any>(this.url+"/getUserData");
   }
  }


