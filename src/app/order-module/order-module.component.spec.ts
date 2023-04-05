import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderModuleComponent } from './order-module.component';

describe('OrderModuleComponent', () => {
  let component: OrderModuleComponent;
  let fixture: ComponentFixture<OrderModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
