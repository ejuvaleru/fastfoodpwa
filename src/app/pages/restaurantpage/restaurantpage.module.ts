import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantpagePageRoutingModule } from './restaurantpage-routing.module';

import { RestaurantpagePage } from './restaurantpage.page';
import { OrderCheckoutPage } from './order-checkout/order-checkout.page';
import { OrderCheckoutPageModule } from './order-checkout/order-checkout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantpagePageRoutingModule,
    OrderCheckoutPageModule
  ],
  declarations: [RestaurantpagePage],
  entryComponents: [OrderCheckoutPage]
})
export class RestaurantpagePageModule {}
