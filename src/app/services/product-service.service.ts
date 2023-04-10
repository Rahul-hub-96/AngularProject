import { Injectable } from '@angular/core';
import {Product} from '../productforms/Product';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http:HttpClient) { }
  url:String="http://localhost:3000"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  Save(prod:Product){
    return this.http.post<Product>(this.url+"/getProductData",prod);
  }

  GetData()
  {
    return this.http.get<Product[]>(this.url+"/getProductData");
  }
  
  updateProduct(prod: Product): Observable<Product> {
    return this.http.put<Product>(this.url+"/getProductData/"+prod.id, prod);
  }

  // Delete
  delete(prod:Product): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/getProductData/"+prod.id);
  }

  updateProducts(prod: Product): Observable<Product> {
    return this.http.patch<Product>(this.url+"/getProductData/"+prod.id, prod);
  }
}
