import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { BehaviorSubject } from 'rxjs';

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

  orderItemCount: BehaviorSubject<number>;

  constructor(
    private orderService: OrderserviceService,
  ) { }

  ngOnInit() {
    this.orderItemCount = this.orderService.getOrderItemCount();
  }


}
