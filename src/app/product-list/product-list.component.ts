import { Component, OnInit } from '@angular/core';
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
      clearance: false,
    },
    {
      name: "Sorrentinos de calabaza",
      type: "Pasta",
      price: 130,
      stock: 0,
      clearance: true,
    },
    {
      name: "Tres son multitud",
      type: "Vino",
      price: 180,
      stock: 0,
      clearance: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
