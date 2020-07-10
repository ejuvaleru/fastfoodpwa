import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordenes: Order[] = [];

  constructor(
    private afs: AngularFirestore
  ) { }

  getOrders(user_id: string) {
    return this.afs.collection('ordenes', ref => (ref.orderBy('fecha', 'desc').where('user_id', '==', user_id))).valueChanges({ idField: 'id' });
  }

  getOrderInfoById(order_id: string) {

  }
}
