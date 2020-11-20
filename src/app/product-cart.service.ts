import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

private _shopList: Product[] = [];

shopList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

constructor() { }

  addToCart(product: Product) {
    let item: Product = this._shopList.find((v1) => v1.name == product.name);
    if(!item){
      this._shopList.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    this.shopList.next(this._shopList); //es equivalente al emitt de eventos.
  }


}
