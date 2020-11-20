import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-check-cart',
  templateUrl: './check-cart.component.html',
  styleUrls: ['./check-cart.component.scss']
})
export class CheckCartComponent implements OnInit {


  totalProd$:number;
  constructor(private cart: ProductCartService) {
    cart.total.subscribe(obserbableTotal => this.totalProd$ = obserbableTotal);
    console.log(this.totalProd$);
  }

  ngOnInit(): void {
  }

}
