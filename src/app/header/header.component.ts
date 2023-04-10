import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  user:any;
constructor(private login:LoginserviceService){

}
ngOnInit(): void {
  
}


}

