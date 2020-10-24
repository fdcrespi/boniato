import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product = {
    "name": "Ravioles de verdura",
    "type": "Pasta",
    "price": 130,
    "stock": 5
  }

  constructor() { }

  ngOnInit(): void {
  }

}
