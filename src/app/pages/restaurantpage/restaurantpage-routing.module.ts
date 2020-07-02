import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantpagePage } from './restaurantpage.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantpagePage
  },
  {
    path: 'foodpage',
    loadChildren: () => import('./foodpage/foodpage.module').then( m => m.FoodpagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantpagePageRoutingModule {}
