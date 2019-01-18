import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    OrderAddComponent,
    CustomerAddComponent,
    ProductListComponent,
    OrderListComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
