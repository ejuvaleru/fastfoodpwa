import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  COLLECTION_NAME = 'ordenes';

  constructor(
    private afs: AngularFirestore
  ) { }

  createOrder(order: Order) {
    this.afs.collection(this.COLLECTION_NAME).add(order);
  }
}
