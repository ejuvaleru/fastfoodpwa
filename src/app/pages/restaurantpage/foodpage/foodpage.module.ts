import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodpagePageRoutingModule } from './foodpage-routing.module';

import { FoodpagePage } from './foodpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodpagePageRoutingModule
  ],
  declarations: [FoodpagePage]
})
export class FoodpagePageModule {}
