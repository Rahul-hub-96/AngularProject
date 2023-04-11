import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UserRegistrationForm } from '../model/UserRegistrationForm';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {

  usr!: UserRegistrationForm[];

  //userform!: FormGroup;
  userform: FormGroup= new FormGroup({});

  namepattern = "^[a-zA-z ]{2,50}$";
  //emailpattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";

  constructor(private fb: FormBuilder, private ser: RegistrationService,private router: Router) {
  }

  ngOnInit(): void {
    
    this.userform = this.fb.group(

      {       
        username: ['', [Validators.required, Validators.pattern(this.namepattern)]],
        email: ['', [Validators.required]],
        password1: ['', [Validators.required] ],
        password2: ['', [Validators.required] ],
        usertype: ['',[]]
      }

    )

  }

  submit() {
    if(this.userform.value['password1'] === this.userform.value['password2']){
    if (this.userform.valid) {
      
      this.ser.Save(this.userform.value).subscribe();
      alert("User register successfully")
      this.router.navigateByUrl('/login');
     //window.location.reload();
     
    }
  }else{
      alert("Both passwords does not match")
  }

  }

 
}
