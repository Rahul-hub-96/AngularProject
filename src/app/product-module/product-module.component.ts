import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';
import { HttpClient } from '@angular/common/http';
import {Product} from '../productforms/Product';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-product-module',
  templateUrl: './product-module.component.html',
  styleUrls: ['./product-module.component.css']
})
export class ProductModuleComponent implements OnInit  {

  prodser!:Product[];
  productForm: FormGroup= new FormGroup({});

  constructor(private fb: FormBuilder, private ser:ProductServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],
      manufacturer: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.ser.GetData().subscribe(list => {
      this.prodser = list;
    });
  }

  listTodos() {
    this.ser.GetData().subscribe(list => {
      this.prodser = list;
    });
  }

  submit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.ser.Save(this.productForm.value).subscribe();
      window.location.reload();
    }
  }

  editProduct(prod: Product) {
    prod.editing = true;
  }
  
  updateProduct(prod: Product) {

    this.ser.updateProduct(prod)
    .subscribe((updatedProduct) => {
      console.log('Product updated successfully:', updatedProduct);
    });
      window.location.reload();
  }

  deleteProduct(prod: Product) {
    console.log(prod.id)
    this.ser.delete(prod).subscribe((data) => {
      this.prodser = data;
    });
    window.location.reload();
  }

  ProductReport(){
    const element = document.querySelector('table');
  const options = {
    filename: 'table.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(options).save();
  }

}
