import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSection } from './discount-section';

describe('DiscountSection', () => {
  let component: DiscountSection;
  let fixture: ComponentFixture<DiscountSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
