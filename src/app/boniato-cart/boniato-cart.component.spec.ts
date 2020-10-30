import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniatoCartComponent } from './boniato-cart.component';

describe('BoniatoCartComponent', () => {
  let component: BoniatoCartComponent;
  let fixture: ComponentFixture<BoniatoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoniatoCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoniatoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
