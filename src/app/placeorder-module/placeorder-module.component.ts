import { Component, Input } from '@angular/core';
import { PlaceOrderGrid } from './model/PlaceOrderGrid';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../productforms/Product';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceorderserviceService } from '../placeorderservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-placeorder-module',
  templateUrl: './placeorder-module.component.html',
  styleUrls: ['./placeorder-module.component.css']
})
export class PlaceorderModuleComponent {

  constructor(private fb:FormBuilder, private productService:ProductServiceService, private placeOrderService:PlaceorderserviceService,
    private route: ActivatedRoute, private router: Router
   ){
    this.placeOrderForm = this.fb.group({
      placeOrdDetails : this.fb.array([]),
    });
  }

  products!:Product[];
  productNames!:Product[];
  productDetails!:Product[];
  categoryArr=new Array();
  productNamess!:string[];
  search:string='';
  disableSelect:boolean=true;

  totalAmount:number=0;
  price=0;
  placeOrderForm!: FormGroup;
  
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.GetData().subscribe(product => {
     this.products = product;
    });
  }

  getProductByCategory(catName:any, index:number){
    this.productNamess = this.products.filter(pro => pro.category==catName).map(name => name.name);
  }

  getProductByName(index:number){
    let cat = this.getFormArray().at(index).get('category')?.value;
    return this.products.filter(pro => pro.category==cat);
  }

  getProductDetaisByName(id:string, index:number){
    alert(id);
    let price = this.products.filter(pro => pro.id==parseInt(id)).map(pri => pri.price);
    let availableQuantity = this.products.filter(pro => pro.id==parseInt(id)).map(pri => pri.quantity);
    this.getFormArray().at(index).patchValue({'price':price[0]});
    this.getFormArray().at(index).patchValue({'id':index+1});
    this.getFormArray().at(index).patchValue( {'productId':id});
    let orderNumber = 10*parseInt(id);
    this.getFormArray().at(index).patchValue( {'ordernumber':orderNumber});
    this.getFormArray().at(index).patchValue({'customer':'rahul'});
    this.getFormArray().at(index).patchValue({'availableQuantity':availableQuantity[0]});
    
  }

  getFormArray(){
    return this.placeOrderForm.get('placeOrdDetails') as FormArray;
  }

  addMoreRow() {
    this.getFormArray().push(this.fb.group({
      id:[''],
      ordernumber:[''],
      productId:[''],
      customer:[''],
      category: [''],
      pname: [''],
      price: [''],
      quantity: [''],
      totalAmount: [''],
      availableQuantity:['']
    }));
  }

  deleteRow(index: number) {
    if (this.getFormArray().length > 1)
    this.getFormArray().removeAt(index);
  }

  product:PlaceOrderGrid[]=new Array();

  placeOrder() {
    //
    // this.placeOrderForm.controls['placeOrdDetails']?.value
        this.placeOrderService.savePlaceOrder( this.placeOrderForm.get('placeOrdDetails')?.value)
    .subscribe((response:Response) => {
        this.router.navigateByUrl('/order');
    })
  }

  quantity(quan:string, index:number){
    let qnty = parseInt(quan);
    let price = this.getFormArray().at(index).get('price')?.value;
    let totalAmount =  price*qnty;
    this.getFormArray().at(index).patchValue({'totalAmount':totalAmount});
    let availableQuantity = this.getFormArray().at(index).get('availableQuantity')?.value;
    let avaibaleQty = parseInt(availableQuantity)-qnty;
    this.getFormArray().at(index).patchValue({'availableQuantity':avaibaleQty});
  }

  maxQuan(num:any,index:number){
  //  this.getFormArray().at(index).patchValue({})
  // this.getFormArray().at(index).get('availableQuantity')?.value.push(new FormControl('', Validators.maxLength(this.getFormArray().at(index).get('availableQuantity')?.value)))
  //  if(num <=this.getFormArray().at(index).get('availableQuantity')?.value){
  //   return true;
  //  }else return false;
  //   return this.getFormArray().at(index).get('availableQuantity')?.value;
  }
}
