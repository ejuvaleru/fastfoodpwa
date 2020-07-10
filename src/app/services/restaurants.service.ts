import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private COLLECTION_NAME = 'restaurantes';

  restaurants: Restaurant[] = [];

  constructor(
    private afs: AngularFirestore
  ) {
   }

  getRestaurants() {
    this.afs.collection(this.COLLECTION_NAME).valueChanges().subscribe((res: Restaurant[]) => {
      res.forEach((r: Restaurant) => {
        console.log(r);
        this.restaurants.push(r);
      });
    });
    return this.restaurants;
  }

  getRestaurant(id: string) {
    return this.restaurants.find(r => r.id === id);
  }
}
