import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent }  from './checkout/checkout.component'
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products', component: ProductsComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
