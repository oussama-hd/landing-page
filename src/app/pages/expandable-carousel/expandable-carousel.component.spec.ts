import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableCarouselComponent } from './expandable-carousel.component';

describe('ExpandableCarouselComponent', () => {
  let component: ExpandableCarouselComponent;
  let fixture: ComponentFixture<ExpandableCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
