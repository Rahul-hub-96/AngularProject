import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

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
  const user=res.find((a:any)=>{
    return  a.email===this.loginForm.value.email && a.password1===this.loginForm.value.password &&a.usertype
    
  })
  
  if(user && user.usertype=="Admin"){
    alert("Successfully Login");
    this.loginForm.reset();
    this.router.navigateByUrl("admin/ ");
    
    
  
  }else if(user && user.usertype=="Other"){
    alert("Successfully Login");
    this.loginForm.reset();
    this.router.navigateByUrl("/user");
  }
  else{
    alert("User Not Found");
    this.loginForm.reset();
  }
},err=>{
  alert("Something Went Wrong");
})
}
}
