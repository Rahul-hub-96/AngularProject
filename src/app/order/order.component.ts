import { Component } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { OrderDetails } from '../model/OrderDetails';
import { PlaceOrderDetails } from '../model/PlaceOrderDetails';
import { ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
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

