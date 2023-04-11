import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyFormsComponent } from './dummy-forms.component';

describe('DummyFormsComponent', () => {
  let component: DummyFormsComponent;
  let fixture: ComponentFixture<DummyFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
