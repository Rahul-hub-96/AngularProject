import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private cs:LoginserviceService){

  }
ngOnInit(){
this.loginForm=this.formBuilder.group({
  email:[''],
  password:['']
})
}
logIn(){
this.cs.logIn().subscribe(res=>{
  const user=res.find((a:any)=>{
    return  a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
    
  })
  
  if(user && user.role==="Admin"){
    alert("Successfully Login");
    this.loginForm.reset();
    this.router.navigate(['/home']);
    
    
  
  }else{
    alert("User Not Found");
  }
},err=>{
  alert("Something Went Wrong");
})
}
}
