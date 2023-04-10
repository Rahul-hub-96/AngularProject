import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../productforms/Product';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  prodser:any;
  productForm: FormGroup= new FormGroup({});
  id:any;
  constructor(private fb: FormBuilder, private ser:ProductServiceService,
    private http: HttpClient, private _route:Router, 
    private _router:ActivatedRoute,) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],
      manufacturer: ['', Validators.required],
      image: ['', Validators.required]
    });


    this.id=this._router.snapshot.params['pid'];
    console.log("id"+this.id)
this.ser.getById(this.id).subscribe((data)=>{
  this.prodser=data;
    console.log("data"+this.prodser);
    });
  }
  


  
  updateProduct(prod: Product) {

    this.ser.updateProduct(prod)
    .subscribe((updatedProduct) => {
     
    });
    this._route.navigate(['/admin/getproduct']);
  }
}


  
  


