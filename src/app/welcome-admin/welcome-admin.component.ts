import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { SupplierService } from '../services/supplier.service';
import { UserRegistrationForm } from '../model/UserRegistrationForm';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent {
  pcount:number=0;
  ucount:number=0;
  scount:number=0;
products:any;
suppliers:any;
  constructor(private product:ProductServiceService,private supplier:SupplierService,private user:RegistrationService){

  }
  ngOnInit(): void {
    this.product.GetData().subscribe((data)=>{
      this.products=data;
      console.log(this.products)
      this.pcount=this.products.length;
    })
    this.supplier.GetData().subscribe((data)=>{
      this.suppliers=data;
      this.scount=this.suppliers.length;
    })
  }
}
