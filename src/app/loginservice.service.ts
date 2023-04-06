import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented.');
  }
  getUser(): any {
    throw new Error('Method not implemented.');
  }

  constructor(public http:HttpClient) { }

   url:string="http://localhost:3000";
   logIn()
   {
    return this.http.get<any>(this.url+"/getUserData");
   }
   public loginUser(getUserData:any) {
    localStorage.setItem('token', getUserData);
console.log("token"+getUserData)
    return true;
  }
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  
  
  
  
  
   
  
  
  
  }