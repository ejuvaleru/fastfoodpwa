import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCheckoutPage } from './order-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: OrderCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCheckoutPageRoutingModule {}
