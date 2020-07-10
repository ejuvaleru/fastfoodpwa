import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductOrderCount } from '../models/product.order.count.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: Product[] = [];

  constructor(
    private afs: AngularFirestore,
  ) { }

  getProductsByRestaurantId(id_restaurant: string) {
    if (this.productos.length > 0 && this.productos[0].restaurant_id === id_restaurant) {
      console.log("EN CACHÉ");
      return this.productos;
    } else {
      console.log("LLAMANDO");
      this.afs.collection("productos", ref => ref.where('restaurant_id', '==', id_restaurant)).valueChanges().subscribe(res => {
        res.forEach((p: Product) => {
          this.productos.push(p);
        });
      });
      return this.productos;
    }
  }

  getProductById(id: string) {
    return this.productos.find(p => p.id === id);
  }
}
