import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaceOrderGrid } from './placeorder-module/model/PlaceOrderGrid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderserviceService {

  constructor(public http:HttpClient) { }
  url='http://localhost:3000'

  savePlaceOrder(placeOrder:PlaceOrderGrid[]){
    return this.http.post<Response>(this.url+"/getOrderHistory",placeOrder);
  }

  savePlaceOrdsaer(placeOrder:PlaceOrderGrid[]):Observable<PlaceOrderGrid[]>{
    return this.http.post<PlaceOrderGrid[]>(this.url+"/userdataInfo",placeOrder);
  }
}
