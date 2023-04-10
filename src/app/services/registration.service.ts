import { Injectable } from '@angular/core';
import {UserRegistrationForm} from '../model/UserRegistrationForm';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http: HttpClient) { }

  url: string = "http://localhost:3000";


  Save(usr: UserRegistrationForm) {
   
     return this.http.post<UserRegistrationForm>(this.url + "/getUserData", usr);
   
  }
}



