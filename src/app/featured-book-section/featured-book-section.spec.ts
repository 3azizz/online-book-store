import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBookSection } from './featured-book-section';

describe('FeaturedBookSection', () => {
  let component: FeaturedBookSection;
  let fixture: ComponentFixture<FeaturedBookSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedBookSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedBookSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
