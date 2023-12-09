import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerSlickCarouselComponent } from './about-partner-slick-carousel.component';

describe('AboutPartnerSlickCarouselComponent', () => {
  let component: AboutPartnerSlickCarouselComponent;
  let fixture: ComponentFixture<AboutPartnerSlickCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerSlickCarouselComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerSlickCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
