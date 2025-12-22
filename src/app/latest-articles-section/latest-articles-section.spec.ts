import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAriclesSection } from './latest-articles-section';

describe('LatestAriclesSection', () => {
  let component: LatestAriclesSection;
  let fixture: ComponentFixture<LatestAriclesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestAriclesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestAriclesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
