import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoniatoAboutComponent } from './boniato-about/boniato-about.component';
import { BoniatoProductComponent } from './boniato-product/boniato-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { 
    path: 'products',
    component: BoniatoProductComponent
  },
  {
    path: 'about',
    component: BoniatoAboutComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
