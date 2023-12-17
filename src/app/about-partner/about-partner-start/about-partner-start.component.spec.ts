import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerStartComponent } from './about-partner-start.component';

describe('AboutPartnerStartComponent', () => {
  let component: AboutPartnerStartComponent;
  let fixture: ComponentFixture<AboutPartnerStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerStartComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
