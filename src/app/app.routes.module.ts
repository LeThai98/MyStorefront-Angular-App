import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { OrderComponent } from './component/order/order.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path: 'products', component: ProductListComponent},
  { path: 'cart', component: CartComponent },
  {path: 'order', component: OrderComponent},
  { path: 'products/:id', component: ProductDetailComponent },
  {path: 'confirmation', component: ConfirmationComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }