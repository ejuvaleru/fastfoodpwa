import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodpagePage } from './foodpage.page';

describe('FoodpagePage', () => {
  let component: FoodpagePage;
  let fixture: ComponentFixture<FoodpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
