import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

private _shopList: Product[] = [];
shopList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

private _totalProduct: number = 0;
total :BehaviorSubject<number> = new BehaviorSubject<number>(this._totalProduct);

private _subtotalCart: number = 0;
subtotal :BehaviorSubject<number> = new BehaviorSubject<number>(this._subtotalCart);

constructor() { }

  addToCart(product: Product) {
    let item: Product = this._shopList.find((v1) => v1.name == product.name);
    this._subtotalCart = this._subtotalCart + (product.price * product.quantity);
    console.log(this._subtotalCart);
    if(!item){
      this._shopList.push({... product});
      this._totalProduct++;
    } else {
      item.quantity += product.quantity;
    }
    this.shopList.next(this._shopList); //es equivalente al emitt de eventos.
    this.total.next(this._totalProduct);
    this.subtotal.next(this._subtotalCart);
  }

  removeToCart(product: Product){
    let i = this._shopList.indexOf(product);
    this._shopList.splice( i, 1 );
    this._totalProduct--;
    this._subtotalCart = this._subtotalCart - (product.price * product.quantity);
    console.log(product.quantity * product.price);
    this.shopList.next(this._shopList); //es equivalente al emitt de eventos.
    this.total.next(this._totalProduct);
    this.subtotal.next(this._subtotalCart);
  }


}
