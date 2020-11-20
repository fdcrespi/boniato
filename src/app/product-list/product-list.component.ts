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
      image: 'https://instagram.foyo1-1.fna.fbcdn.net/v/t51.2885-15/e35/117834787_2872011636419377_5109684922592207141_n.jpg?_nc_ht=instagram.foyo1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Gv0n2VbxwDkAX8Kke7n&tp=1&oh=288a5bbe8819cad9cf39bda1f5e8bae2&oe=5FE11FBD',
    },
    {
      name: "Sorrentinos de Bondiola",
      type: "Pasta",
      price: 150,
      stock: 0,
      description: "Sorrentinos rellenos de Bondiola braseada con vegetales asados. En masa de cúrcuma y espinaca. Se venden por docena",
      clearance: true,
      quantity: 0,
      image: 'https://instagram.foyo1-1.fna.fbcdn.net/v/t51.2885-15/e35/118207850_195849281950620_3055687398520720964_n.jpg?_nc_ht=instagram.foyo1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=VgoBSgyP7b8AX-7HCva&tp=1&oh=e23e8efd774e7e4c299932ef282df80b&oe=5FE3074C',
    },
    {
      name: "Ravioles de Ricota",
      type: "Pasta",
      price: 130,
      stock: 3,
      description: "Ravioles rellenos de Ricota, tomate seco y nuez. En masa de remolacha y cúrcuma. Se venden por docena",
      clearance: false,
      quantity: 0,
      image: 'https://instagram.foyo1-1.fna.fbcdn.net/v/t51.2885-15/e35/119068388_196661935149661_7410917246561880379_n.jpg?_nc_ht=instagram.foyo1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=3kV4f902DU0AX-yb7WY&tp=1&oh=e272ddc012fd78f298cb652a51e4647f&oe=5FE0F622',
    },
    {
      name: "Loco de remate",
      type: "Vino",
      price: 180,
      stock: 9,
      description: "Loco de remate, de bodega Sánchez Potenzoni. Desde Luján de Cuyo en todas sus variedades",
      clearance: false,
      quantity: 0,
      image: 'https://instagram.foyo1-1.fna.fbcdn.net/v/t51.2885-15/e35/118187433_169590847980231_9087864408403520140_n.jpg?_nc_ht=instagram.foyo1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=RzHPenv2TfgAX_RtfdN&tp=1&oh=2f6e380fff61b9d60b2bc6db4c224707&oe=5FE0EBE6',
    },
    {
      name: "Ruta 60",
      type: "Vino",
      price: 210,
      stock: 24,
      description: "Ruta 60, de Finca Don Diego nos ofrece desde Catamarca un Syrah perfecto para maridar con las salsas de Boniato",
      clearance: false,
      quantity: 0,
      image: 'https://instagram.foyo1-1.fna.fbcdn.net/v/t51.2885-15/e35/118171705_124028772440304_8381387980936155013_n.jpg?_nc_ht=instagram.foyo1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=8fJKaCKVei4AX8nxLt6&tp=1&oh=01acb58c22eb819cf55368f23b2a1d30&oe=5FE35BB3',
    },
    {
      name: "Sorrentinos de Pollo",
      type: "Pasta",
      price: 165,
      stock: 8,
      description: "Sorrentinos rellenos de pollo al curry. En masa de espinaca y pimentón ahumado. Se venden por docena",
      clearance: true,
      quantity: 0,
      image: 'https://instagram.foyo1-1.fna.fbcdn.net/v/t51.2885-15/e35/120592667_2720407054895619_2643865413782622584_n.jpg?_nc_ht=instagram.foyo1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=cQICj7Fd0HEAX-74K8f&tp=1&oh=ace11678f75826f9fa636f13d015383d&oe=5FE1EE8A',
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
