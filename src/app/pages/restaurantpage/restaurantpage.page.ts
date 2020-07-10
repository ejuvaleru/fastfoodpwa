import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { BehaviorSubject } from 'rxjs';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Restaurant } from 'src/app/models/restaurant.model';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { ModalController } from '@ionic/angular';
import { OrderCheckoutPage } from './order-checkout/order-checkout.page';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-restaurantpage',
  templateUrl: './restaurantpage.page.html',
  styleUrls: ['./restaurantpage.page.scss'],
})
export class RestaurantpagePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4.5,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 4.5,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 5.5,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 7.5,
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 9.5,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 12.5,
      }
    }
  };

  token_device: string;

  orderItemCount: BehaviorSubject<number>;

  restaurant_id: string;
  restaurant: Restaurant;

  products: Product[] = [];

  constructor(
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private restaurantService: RestaurantsService,
    private productsService: ProductsService,
    private orderService: OrderserviceService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    
    this.orderItemCount = this.orderService.getOrderItemCount();
    
    this.activatedRoute.paramMap.subscribe(paramMap => {
      
      this.restaurant_id = paramMap.get('restaurantId');
      console.log(this.restaurant_id.toString());
      if (!this.restaurant_id) {
        this.location.back();
        return;
      } else {
        this.token_device = this.notificationsService.requestPushNotificationsPermission();

        this.restaurant = this.restaurantService.getRestaurant(this.restaurant_id.toString());
        console.log('restaurante ', this.restaurant);

        this.products = this.productsService.getProductsByRestaurantId(this.restaurant_id);
      }

    });
  }

  async openCart() {
    const modal = await this.modalController.create({
      backdropDismiss: true,
      component: OrderCheckoutPage,
      componentProps: {
        'order': this.orderService.order,
        'restaurant_id': this.restaurant_id,
        'token': this.token_device,
      }
    });

    await modal.present();
  }
}
