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
      name: "Ravioles de Batata",
      type: "Pasta",
      price: 130,
      stock: 5,
      description: "Ravioles rellenos de Batata, cebolla caramelizada y corazon de roquefort. En masa de hongo de pino. Se venden por docena",
      clearance: false,
      quantity: 0,
      image: './assets/img/ravioles-batatacebollayroque.jpg',
    },
    {
      name: "Sorrentinos de Bondiola",
      type: "Pasta",
      price: 150,
      stock: 0,
      description: "Sorrentinos rellenos de Bondiola braseada con vegetales asados. En masa de cúrcuma y espinaca. Se venden por docena",
      clearance: true,
      quantity: 0,
      image: './assets/img/sorrentinos-vegetales.jpg',
    },
    {
      name: "Ravioles de Ricota",
      type: "Pasta",
      price: 130,
      stock: 3,
      description: "Ravioles rellenos de Ricota, tomate seco y nuez. En masa de remolacha y cúrcuma. Se venden por docena",
      clearance: false,
      quantity: 0,
      image: './assets/img/ravioles-tomatericotaynuez.jpg',
    },
    {
      name: "Loco de remate",
      type: "Vino",
      price: 180,
      stock: 9,
      description: "Loco de remate, de bodega Sánchez Potenzoni. Desde Luján de Cuyo en todas sus variedades",
      clearance: false,
      quantity: 0,
      image: './assets/img/loco-malbec.jpg',
    },
    {
      name: "Ruta 60",
      type: "Vino",
      price: 210,
      stock: 24,
      description: "Ruta 60, de Finca Don Diego nos ofrece desde Catamarca un Syrah perfecto para maridar con las salsas de Boniato",
      clearance: false,
      quantity: 0,
      image: './assets/img/ruta60.jpg',
    },
    {
      name: "Sorrentinos de Pollo",
      type: "Pasta",
      price: 165,
      stock: 8,
      description: "Sorrentinos rellenos de pollo al curry. En masa de espinaca y pimentón ahumado. Se venden por docena",
      clearance: true,
      quantity: 0,
      image: './assets/img/sorrentinos-polloalcurry.jpg',
    }
  ];

  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

  addToCart(product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
