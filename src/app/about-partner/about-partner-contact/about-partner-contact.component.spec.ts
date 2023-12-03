import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerContactComponent } from './about-partner-contact.component';

describe('AboutPartnerContactComponent', () => {
  let component: AboutPartnerContactComponent;
  let fixture: ComponentFixture<AboutPartnerContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerContactComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
