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
import { ProductServiceService } from './services/product-service.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  RegistrationPageComponent,
   
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
	ProductModuleComponent,
    SupplierModuleComponent,
    AdminDashboardComponent,
    WelcomeAdminComponent,
    WelcomeUserComponent
    
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
