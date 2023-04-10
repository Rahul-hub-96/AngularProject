import { Component, Input } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLoggedIn=false;
  user: any;
  @Input() isLogin=false;
constructor(private login:LoginserviceService){

}
ngOnInit(){
  alert(this.isLogin)
  this.isLoggedIn = this.login.isLoggedIn();
  
  this.login.subscribe((data:any) => {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    console.log("user"+this.user);
  });
}
}

