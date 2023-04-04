import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public http:HttpClient) { }

   url:string="http://localhost:3000";
   logIn()
   {
    return this.http.get<any>(this.url+"/User");
   }
  
  
  
  
   
  
  
  
  }