import { Component } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { OrderDetails } from './model/OrderDetails';
import { PlaceorderserviceService } from '../placeorderservice.service';

@Component({
  selector: 'app-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent {

  orderData!:OrderDetails[];
  orderDatas:OrderDetails[]=[];
  constructor(private orderservice:OrderserviceService, private placeOrderService:PlaceorderserviceService){}

  ngOnInit():void{
    this.showOrderDetails();
  }

  showOrderDetails(){
    this.orderservice.getOrderHistory().subscribe(list => {
      this.orderData =list;
      console.log(this.orderData);
    });
  }
}
