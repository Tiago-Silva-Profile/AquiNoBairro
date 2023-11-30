import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerPromotionComponent } from './about-partner-promotion.component';

describe('AboutPartnerPromotionComponent', () => {
  let component: AboutPartnerPromotionComponent;
  let fixture: ComponentFixture<AboutPartnerPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerPromotionComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
