import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoniatoAboutComponent } from './boniato-about/boniato-about.component';
import { BoniatoProductComponent } from './boniato-product/boniato-product.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'about',
    component: BoniatoAboutComponent
  },
  {
    path: 'cart',
    component: CartShoppingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
