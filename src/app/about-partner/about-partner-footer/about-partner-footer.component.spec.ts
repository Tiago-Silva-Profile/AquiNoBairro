import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerFooterComponent } from './about-partner-footer.component';

describe('AboutPartnerFooterComponent', () => {
  let component: AboutPartnerFooterComponent;
  let fixture: ComponentFixture<AboutPartnerFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerFooterComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
