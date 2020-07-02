import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantpagePageRoutingModule } from './restaurantpage-routing.module';

import { RestaurantpagePage } from './restaurantpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantpagePageRoutingModule
  ],
  declarations: [RestaurantpagePage]
})
export class RestaurantpagePageModule {}
