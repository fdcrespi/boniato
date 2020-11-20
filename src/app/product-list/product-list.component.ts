import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: "Ravioles de verdura",
      type: "Pasta",
      price: 130,
      stock: 5,
      description: "Ravioles rellenos con verdura. Se venden por docena",
      clearance: false,
      quantity: 0
    },
    {
      name: "Sorrentinos de calabaza",
      type: "Pasta",
      price: 130,
      stock: 0,
      description: "Sorrentinos rellenos con calabaza. Se venden por docena",
      clearance: true,
      quantity: 0
    },
    {
      name: "Tres son multitud",
      type: "Vino",
      price: 180,
      stock: 2,
      description: "Malbec",
      clearance: false,
      quantity: 0
    }
  ];

  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

  maxReached(m: string): void{
    alert(m);
  }

  addToCart(product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
