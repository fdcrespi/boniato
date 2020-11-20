import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.scss']
})
export class CartShoppingComponent implements OnInit {

  cartList$: Observable<Product[]>;
  totalProd$:number;
  subtotalCart$:number;
  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.shopList.asObservable();
    cart.total.subscribe(observableTotal => this.totalProd$ = observableTotal);
    cart.subtotal.subscribe(observableSubtotal => this.subtotalCart$ = observableSubtotal);
  }

  ngOnInit(): void {
  }

  removeToCart(product){
    this.cart.removeToCart(product);
    product.stock += product.quantity;
    product.quantity = 0;
  }

}
