import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniatoAboutComponent } from './boniato-about.component';

describe('BoniatoAboutComponent', () => {
  let component: BoniatoAboutComponent;
  let fixture: ComponentFixture<BoniatoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoniatoAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoniatoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
