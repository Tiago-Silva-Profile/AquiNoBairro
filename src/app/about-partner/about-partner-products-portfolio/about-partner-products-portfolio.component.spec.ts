import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerProductsPortfolioComponent } from './about-partner-products-portfolio.component';

describe('AboutPartnerProductsPortfolioComponent', () => {
  let component: AboutPartnerProductsPortfolioComponent;
  let fixture: ComponentFixture<AboutPartnerProductsPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerProductsPortfolioComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerProductsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
