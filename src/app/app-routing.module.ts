import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { ProductModuleComponent } from './product-module/product-module.component';

import { SupplierModuleComponent } from './supplier-module/supplier-module.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { OrderComponent } from './order/order.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PlaceorderModuleComponent } from './placeorder-module/placeorder-module.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
{
  path:"user",
  component:WelcomeUserComponent
},
 
  {
    path:"register",
    component:RegistrationPageComponent
  },
  {

     path:"order/:type",
    
     component:OrderComponent
    
    },
    
    {
    
     path:"placeOrder",
    
     component:PlaceorderModuleComponent
    
    },
  {
    path: "admin",
    component: AdminDashboardComponent,
    children: [{
      path: " ",
     
      component: WelcomeAdminComponent
    },
    {
      path: "product",
      component: ProductModuleComponent
    },
    {
      path: "getproduct",
      component: ViewProductComponent
    },
  
    {
      path: "supplier",
      component: SupplierModuleComponent
    },
    {
      path: "updateprod/:pid",
      component:UpdateProductComponent
    },{

       path:"order/:type",
      
       component:OrderComponent
      
      },
      
      {
      
       path:"placeOrder",
      
       component:PlaceorderModuleComponent
      
      }
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
