import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  usertype:any;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private cs:LoginserviceService){

  }
ngOnInit(){
  
this.loginForm=this.formBuilder.group({
  email:[''],
  password:[''],
  
})
}
logIn(){
this.cs.logIn().subscribe(res=>{
 const user = res.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password1===this.loginForm.value.password &&a.usertype
  });
  if(user == undefined || user == null){
    alert("User Not Found");
    this.loginForm.reset();
  } else if( user.usertype=="Admin"){
    alert("Successfully Login");
    this.cs.customerId=0;
    this.loginForm.reset();
    this.router.navigateByUrl("/admin");
  }else if(user.usertype=="Other"){
  alert("Successfully Login");
  this.cs.customerId=user.id;
    this.loginForm.reset();
    this.router.navigateByUrl("/order/customer");
  }
},err=>{
  alert("Something Went Wrong");
})
}
}
