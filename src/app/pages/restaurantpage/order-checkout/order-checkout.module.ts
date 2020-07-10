import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderCheckoutPageRoutingModule } from './order-checkout-routing.module';

import { OrderCheckoutPage } from './order-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCheckoutPageRoutingModule
  ],
  declarations: [OrderCheckoutPage]
})
export class OrderCheckoutPageModule {}
