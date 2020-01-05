import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { SelectRoleComponent } from './select-role/select-role.component';
import {HttpClientModule} from '@angular/common/http';
import { SignCustomerComponent } from './sign-customer/sign-customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopOrdersComponent } from './shop-orders/shop-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    CustomerComponent,
    SelectRoleComponent,
    SignCustomerComponent,
    CheckoutComponent,
    ShopOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
