import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceorderModuleComponent } from './placeorder-module.component';

describe('PlaceorderModuleComponent', () => {
  let component: PlaceorderModuleComponent;
  let fixture: ComponentFixture<PlaceorderModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceorderModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceorderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
