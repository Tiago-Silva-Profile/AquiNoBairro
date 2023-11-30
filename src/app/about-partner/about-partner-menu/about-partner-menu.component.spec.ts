import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerMenuComponent } from './about-partner-menu.component';

describe('AboutPartnerMenuComponent', () => {
  let component: AboutPartnerMenuComponent;
  let fixture: ComponentFixture<AboutPartnerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerMenuComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
