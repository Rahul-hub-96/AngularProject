import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../productforms/Product';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { ProductServiceService } from '../services/product-service.service';
import { PlaceorderserviceService } from '../services/placeorderservice.service';
import { PlaceOrderGrid } from '../model/PlaceOrderGrid';


@Component({
  selector: 'app-placeorder-module',
  templateUrl: './placeorder-module.component.html',
  styleUrls: ['./placeorder-module.component.css']
})
export class PlaceorderModuleComponent {

  constructor(private fb: FormBuilder, private productService: ProductServiceService, private placeOrderService: PlaceorderserviceService,
    private router: Router, private loginService: LoginserviceService
  ) {
    this.placeOrderForm = this.fb.group({
      placeOrdDetails: this.fb.array([
        this.fb.group({
          id: [''],
          ordernumber: [''],
          productId: [''],
          customer: [''],
          category: ['', Validators.required],
          pname: ['', Validators.required],
          price: [''],
          quantity: ['', [Validators.required, Validators.min(1)]],
          totalAmount: [''],
          availableQuantity: [''],
          status: ['']
        })
      ]),
    });
  }

  products!: Product[];
  productNames!: Product[];
  productDetails: Product[] = new Array();
  categoryArr = new Array();
  productNamess!: string[];
  disableSelect: boolean = true;
  placeOrderForm!: FormGroup;

  ngOnInit(): void {
    this.getAllProduct();
    this.getFormArray().at(0).patchValue({ 'quantity': 1 });
    this.getFormArray().at(0).patchValue({ 'price': 0 });
    this.getFormArray().at(0).patchValue({ 'totalAmount': 0 });
    alert(this.loginService.customerId);
  }

  addMoreRow() {
    this.getFormArray().push(this.fb.group({
      id: [''],
      ordernumber: [''],
      productId: [''],
      customer: [''],
      category: ['',Validators.required],
      pname: ['',Validators.required],
      price: [''],
      quantity: [null, [Validators.required, Validators.min(1)]],
      totalAmount: [''],
      availableQuantity: [''],
      status: ['']
    }));
   
  }


  getAllProduct() {
    this.productService.GetData().subscribe(product => {
      this.products = product;
    });
  }

  getProductByCategory(catName: any, index: number) {
    this.productNamess = this.products.filter(pro => pro.category == catName).map(name => name.name);
  }

  getProductByName(index: number) {
    let cat = this.getFormArray().at(index).get('category')?.value;
    // this.getFormArray().at(index).patchValue({'quantity':1});
    // this.getFormArray().at(index).patchValue({ 'price': 0 });
    // this.getFormArray().at(index).patchValue({ 'totalAmount': 0 });
    if (this.products != undefined) {
      return this.products.filter(pro => pro.category == cat);
    }
    return;
  }

  getProductDetaisByName(id: string, index: number) {
    let price = this.products.filter(pro => pro.id == parseInt(id)).map(pri => pri.price);
    let availableQuantity = this.products.filter(pro => pro.id == parseInt(id)).map(pri => pri.quantity);
    this.getFormArray().at(index).patchValue({ 'price': price[0] });
    this.getFormArray().at(index).patchValue({ 'id': index + 1 });
    this.getFormArray().at(index).patchValue({ 'totalAmount': price[0] });
    this.getFormArray().at(index).patchValue({ 'productId': id });
    let orderNumber = 10 * parseInt(id);
    this.getFormArray().at(index).patchValue({ 'ordernumber': orderNumber });
    this.getFormArray().at(index).patchValue({ 'customer': this.loginService.customerId });
    this.getFormArray().at(index).patchValue({ 'availableQuantity': availableQuantity[0] });
    this.getFormArray().at(index).patchValue({ 'status': 'pending' });
    this.getFormArray().at(index).patchValue({ 'quantity':  1 });
  }

  getFormArray() {
    return this.placeOrderForm.get('placeOrdDetails') as FormArray;
  }

  deleteRow(index: number) {
    if (this.getFormArray().length > 1)
      this.getFormArray().removeAt(index);
  }

  placeOrderss: PlaceOrderGrid[] = new Array();
  placeOrder() {
    if (!this.placeOrderForm.invalid) {
      this.placeOrderss = this.placeOrderForm.get('placeOrdDetails')?.value;
      this.placeOrderss.forEach(data => {
        let productData = new Product();
        let availableQuantity = data.availableQuantity - data.quantity;
        productData.quantity = availableQuantity;
        productData.id = data.productId;
        this.productService.updateProducts(productData).subscribe(data => { });
      });
      this.placeOrderService.savePlaceOrder(this.placeOrderForm.value)
        .subscribe((response: Response) => {
          this.router.navigateByUrl('/order/customer');
        });
    }
  }

  quantity(quan: string, index: number) {
   if(quan < this.getFormArray().at(index).get('availableQuantity')?.value){
    let qnty = parseInt(quan);
    let price = this.getFormArray().at(index).get('price')?.value;
    let totalAmount = price * qnty;
    this.getFormArray().at(index).patchValue({ 'totalAmount': totalAmount });
  }else 
     this.getFormArray().at(index).get('quantity')?.addValidators(Validators.max(this.getFormArray().at(index).get('availableQuantity')?.value)); 
  }
}
