import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerProductsComponent } from './about-partner-products.component';

describe('AboutPartnerProductsComponent', () => {
  let component: AboutPartnerProductsComponent;
  let fixture: ComponentFixture<AboutPartnerProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerProductsComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
