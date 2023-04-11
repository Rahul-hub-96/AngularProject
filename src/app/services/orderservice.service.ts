import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from '../model/OrderDetails';


@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000"

  showOrderDetails(){
    return this.http.get<OrderDetails[]>(this.url+"/showOrderDetails");
  }
  getOrderHistory(customer:number){

    return this.http.get<OrderDetails[]>(this.url+"/getOrderHistory?customer="+customer);
    
   }
    
    
    
    
   getOrderHistoryForAdmin(){
    
    return this.http.get<OrderDetails[]>(this.url+"/getOrderHistory");
    
   }
  
}
