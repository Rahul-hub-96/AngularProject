import { Component } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { OrderDetails } from './model/OrderDetails';

@Component({
  selector: 'app-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent {

  orderData!:OrderDetails[];
  constructor(private orderservice:OrderserviceService){}

  ngOnInit():void{
    this.showOrderDetails();
  }

  showOrderDetails(){
    this.orderservice.showOrderDetails().subscribe(list => {
      this.orderData=list;
    });
  }
}
