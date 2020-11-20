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

constructor() { }

  addToCart(product: Product) {
    let item: Product = this._shopList.find((v1) => v1.name == product.name);
    if(!item){
      this._shopList.push({... product});
      this._totalProduct++;
    } else {
      item.quantity += product.quantity;
    }
    this.shopList.next(this._shopList); //es equivalente al emitt de eventos.
    this.total.next(this._totalProduct);
  }


}
