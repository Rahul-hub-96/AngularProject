import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceorderserviceService } from '../placeorderservice.service';

@Component({
  selector: 'app-dummy-forms',
  templateUrl: './dummy-forms.component.html',
  styleUrls: ['./dummy-forms.component.css']
})
export class DummyFormsComponent {

  public userForm!: FormGroup;
  public userList!: FormArray;
  uname!: string;
  uemail!: string;
  umobile!: number;

  // returns all form groups under userinfo
  // When the userFormGroup property gets looked up
  // the getter function gets executed and its
  // returned value will be the value of userFormGroup
  get userFormGroup() {
    return this.userForm.get('userinfo') as FormArray;
  }


  constructor(private formBuilder: FormBuilder, private service : PlaceorderserviceService ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userinfo: this.formBuilder.array([this.createForm()])
    });
    // set userList to the form control containing userinfo
    this.userList = this.userForm.get('userinfo') as FormArray;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
        uname: [''],//['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        uemail: [''],
        umobile: ['']// [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]]
    });
  }

  // get the formgroup under userList form array
  getUserFormGroup(index:number): FormGroup {
    const formGroup = this.userList.controls[index] as FormGroup;
    return formGroup;
  }

  // add a user form group
  addUser() {
    this.userList.push(this.createForm());
  }

  // remove user from group
  removeUser(index:number) {
    this.userList.removeAt(index);
  }

  // submit form
  submitss() {
  this.service.savePlaceOrdsaer(this.userForm.value).subscribe(da =>{
  console.log(this.userForm.value);}
  );
    console.log(this.userForm.value);
  }

}
