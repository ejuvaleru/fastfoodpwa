import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject } from 'rxjs';
import { ProductOrderCount } from '../models/product.order.count.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  order = [];
  orderCount = new BehaviorSubject(0);

  constructor() { }

  getOrder() {
    return this.order;
  }

  getOrderItemCount() {
    return this.orderCount;
  }

  addItem(item: ProductOrderCount) {
    this.order.push(item);
    this.orderCount.next(this.orderCount.value + item.count);
  }

  decreaseItem(item: ProductOrderCount) {
    for (let [index, i] of this.order.entries()) {
      if (i.product.id === item.product.id) {
        i.count -= 1;
        if (i.count == 0) {
          this.order.splice(index, 1);
        }
      }
    }
    this.orderCount.next(this.orderCount.value - 1);
  }

  removeItem(item: ProductOrderCount) {
    for (let [index, i] of this.order.entries()) {
      if (i.product.id === item.product.id) {
        this.orderCount.next(this.orderCount.value - i.count);
        this.order.splice(index, 1);
      }
    }
  }
}
