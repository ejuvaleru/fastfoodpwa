import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Order } from 'src/app/models/order.model';
import { ProductOrderCount } from 'src/app/models/product.order.count.model';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.page.html',
  styleUrls: ['./order-checkout.page.scss'],
})
export class OrderCheckoutPage implements OnInit {

  @Input() order: ProductOrderCount[];
  @Input() restaurant_id: string;
  @Input() token: string;

  subtotal = 0;
  total = 0;
  local_orders = [];

  constructor(
    private modalCtrl: ModalController,
    private checkoutService: CheckoutService,
    private orderService: OrderserviceService
  ) { }

  ngOnInit() {
    console.log(this.restaurant_id);
    this.total = this.getTotal();
    console.log(this.order);
  }

  getTotal() {
    return this.order.reduce((i, j) => i + j.product.precio * j.count, 0);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  createOrder() {
    const order: Order = {
      user_id: this.token,
      productos: this.order,
      nombre_cliente: 'Cliente estrella',
      costo_subtotal: this.getTotal(),
      costo_total: this.getTotal(),
      id_restaurant: this.restaurant_id,
      is_aceptada: false,
      is_en_preparacion: false,
      is_lista: false,
      notifications_token: this.token,
      fecha: new Date(),
    };

    localStorage.setItem('user_id', this.token);

    this.checkoutService.createOrder(order);
    let localOrders = JSON.parse(localStorage.getItem("orders"));
    if (!localOrders) {
      this.local_orders.push(order);
      localStorage.setItem("orders", JSON.stringify(this.local_orders));
    } else {
      localOrders.push(order);
      localStorage.setItem("orders", JSON.stringify(localOrders));
    }
    this.dismiss();
    this.orderService.order = [];
    this.orderService.orderCount.next(0);
  }

}
