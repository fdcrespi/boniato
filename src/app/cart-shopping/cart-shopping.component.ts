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
  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void {
  }

}
