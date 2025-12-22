import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRealeseSection } from './new-realese-section';

describe('NewRealeseSection', () => {
  let component: NewRealeseSection;
  let fixture: ComponentFixture<NewRealeseSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRealeseSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRealeseSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
