import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  email: ['', [Validators.required]],
  password1: ['', [Validators.required] ],
  
})
}

logIn(){
this.cs.logIn().subscribe(res=>{
  const user=res.find((a:any)=>{
  
    
    return  a.email===this.loginForm.value.email && a.password1===this.loginForm.value.password1
    
  })
  
  if(user && user.usertype=="Admin"){
   
    alert("Successfully Login");
    this.loginForm.reset();
    this.cs.customerId=0;
    this.router.navigateByUrl("admin/ ");
    
    
  
  }else if(user && user.usertype=="Other"){
    this.cs.customerId=user.id;
    alert("Successfully Login"+user.id);
    this.loginForm.reset();
   
    
    this.router.navigateByUrl("/user");
  }
  else{
    alert("User Not Found");
    this.loginForm.reset();
  }
 /* if(user == undefined || user == null){

      alert("User Not Found");
    
      this.loginForm.reset();
    
     } else if( user && user.usertype=="Admin"){
    
      alert("Successfully Login");
    
      this.cs.customerId=0;
    
      this.loginForm.reset();
    
      this.router.navigateByUrl("admin/ ");
    
     }else if(user.usertype=="Other"){
    
     alert("Successfully Login");
    
     this.cs.customerId=user.id;
    
      this.loginForm.reset();
    
      this.router.navigateByUrl("/order/customer");
    
    }*/
},err=>{
  alert("Something Went Wrong");
})
}
}
