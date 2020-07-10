import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { ProductOrderCount } from 'src/app/models/product.order.count.model';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.page.html',
  styleUrls: ['./foodpage.page.scss'],
})
export class FoodpagePage implements OnInit {

  isExpanded = false;
  isExpanded1 = false;
  count = 1;

  product_id: string;
  product: Product;
  
  productOrder: ProductOrderCount;
  cart = [];

  constructor(
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private productsService: ProductsService,
    private orderService: OrderserviceService,
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {

      this.product_id = paramMap.get('foodId');
      if (!this.product_id) {
        this.location.back();
        return;
      } else {
        this.product = this.productsService.getProductById(this.product_id);
        // this.productOrder = this.orderService.getOrder().find(p => p.product.id === this.product_id);
        // if(this.productOrder){
        //   this.count = this.productOrder.count;
        // }
        console.log(this.product);
      }

    });

  }

  addOneToOrder() {
    this.count += 1;
  }

  removeOneFromOrder() {
    this.count -= 1;
  }

  addToOrder() {
    this.orderService.addItem({ count: this.count, product: this.product });
    this.location.back();
    this.presentToast();
  }

  removeFromOrder(){
    this.orderService.decreaseItem({count: this.count, product: this.product});
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Ha agregado ${this.count} ${this.product.nombre} a tu orden.`,
      duration: 1500,
    });
    toast.present();
  }

}
