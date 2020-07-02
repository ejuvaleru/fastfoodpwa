import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  order= [];
  orderCount = new BehaviorSubject(0);

  constructor() { }

  getOrder(){
    return this.order;
  }

  getOrderItemCount(){
    return this.orderCount;
  }

  addItem(item){

  }

  decreaseItem(item){

  }

  removeItem(item){

  }
}
