import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';

import {FormsModule } from '@angular/forms';
import { BoniatoAboutComponent } from './boniato-about/boniato-about.component';
import { BoniatoProductComponent } from './boniato-product/boniato-product.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CheckCartComponent } from './check-cart/check-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartShoppingComponent,
    BoniatoAboutComponent,
    BoniatoProductComponent,
    InputIntegerComponent,
    CheckCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
