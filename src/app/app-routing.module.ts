import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { ProductModuleComponent } from './product-module/product-module.component';
import { Supplier } from './productforms/Supplier';
import { SupplierModuleComponent } from './supplier-module/supplier-module.component';
import { OrderModuleComponent } from './order-module/order-module.component';

const routes: Routes = [
{
  path:"login",
  component:LoginComponent
},
{
  path:"header",
  component:HeaderComponent
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"product",
  component:ProductModuleComponent
},
{
  path:"supplier",
  component:SupplierModuleComponent
},
{
  path:"order",
  component:OrderModuleComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
