import { Component } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { OrderDetails } from './model/OrderDetails';
import { PlaceorderserviceService } from '../placeorderservice.service';
import { LoginserviceService } from '../loginservice.service';
import { PlaceOrderDetails } from './model/PlaceOrderDetails';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-order-module',
  templateUrl: './order-module.component.html',
  styleUrls: ['./order-module.component.css']
})
export class OrderModuleComponent {

  orderData!: OrderDetails[];
  noData:boolean=true;
  placeOrderDetails!: PlaceOrderDetails[];
  constructor(private orderservice: OrderserviceService, private loginservice: LoginserviceService,
    private route: ActivatedRoute) { }
  customerType!: string | null;
  ngOnInit(): void {
    this.customerType = this.route.snapshot.paramMap.get('type');
      if (this.customerType == 'customer') {
        this.showOrderDetails(this.loginservice.customerId);
      } else if (this.customerType == 'admin') {
        this.showOrderDetails(0);
      }
  }

  showOrderDetails(customerId:number) {
    this.orderservice.getOrderHistory(customerId).subscribe(list => {
      this.orderData = list;
      if(this.orderData.length==0){
        this.noData =false
      }
    });
  }
}

