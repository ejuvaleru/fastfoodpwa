import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderCheckoutPage } from './order-checkout.page';

describe('OrderCheckoutPage', () => {
  let component: OrderCheckoutPage;
  let fixture: ComponentFixture<OrderCheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCheckoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
