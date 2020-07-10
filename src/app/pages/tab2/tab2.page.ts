import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  local_orders: any = [];
  isLoading = true;

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orderService.getOrders(localStorage.getItem('user_id')).subscribe((res) => {
      this.local_orders = res;
      this.isLoading = false;
      console.log(this.local_orders)
    });
    // this.local_orders = JSON.parse(localStorage.getItem("orders"));
    // this.local_orders.reverse();
    // console.log(JSON.parse(localStorage.getItem("orders")));
  }

}
