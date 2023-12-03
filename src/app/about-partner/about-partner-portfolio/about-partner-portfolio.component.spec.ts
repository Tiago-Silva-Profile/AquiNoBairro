import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerPortfolioComponent } from './about-partner-portfolio.component';

describe('AboutPartnerPortfolioComponent', () => {
  let component: AboutPartnerPortfolioComponent;
  let fixture: ComponentFixture<AboutPartnerPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerPortfolioComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
