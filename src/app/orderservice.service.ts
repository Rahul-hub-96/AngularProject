import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from './order-module/model/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000"

  showOrderDetails(){
    return this.http.get<OrderDetails[]>(this.url+"/showOrderDetails");
  }
}
