import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerWeComponent } from './about-partner-we.component';

describe('AboutPartnerWeComponent', () => {
  let component: AboutPartnerWeComponent;
  let fixture: ComponentFixture<AboutPartnerWeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPartnerWeComponent]
    });
    fixture = TestBed.createComponent(AboutPartnerWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
