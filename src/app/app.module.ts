import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ProductModuleComponent } from './product-module/product-module.component';
import { SupplierModuleComponent } from './supplier-module/supplier-module.component';
import { OrderModuleComponent } from './order-module/order-module.component';
import { PlaceorderModuleComponent } from './placeorder-module/placeorder-module.component';
import { FilterPipe } from './placeorder-module/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
   
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
	ProductModuleComponent,
    SupplierModuleComponent,
    OrderModuleComponent,
    PlaceorderModuleComponent,
    FilterPipe

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
