import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniatoProductComponent } from './boniato-product.component';

describe('BoniatoProductComponent', () => {
  let component: BoniatoProductComponent;
  let fixture: ComponentFixture<BoniatoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoniatoProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoniatoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
