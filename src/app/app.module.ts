import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OfferComponent } from './offer/offer.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPartnerComponent } from './about-partner/about-partner.component';
import { AboutPartnerMenuComponent } from './about-partner/about-partner-menu/about-partner-menu.component';
import { AboutPartnerPromotionComponent } from './about-partner/about-partner-promotion/about-partner-promotion.component';
import { AboutPartnerProductsComponent } from './about-partner/about-partner-products/about-partner-products.component';
import { AboutPartnerPortfolioComponent } from './about-partner/about-partner-portfolio/about-partner-portfolio.component';
import { AboutPartnerContactComponent } from './about-partner/about-partner-contact/about-partner-contact.component';
import { AboutPartnerSlickCarouselComponent } from './about-partner/about-partner-slick-carousel/about-partner-slick-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromotionComponent,
    MainContentComponent,
    OfferComponent,
    AsideComponent,
    FooterComponent,
    AboutPartnerComponent,
    AboutPartnerMenuComponent,
    AboutPartnerPromotionComponent,
    AboutPartnerProductsComponent,
    AboutPartnerPortfolioComponent,
    AboutPartnerContactComponent,
    AboutPartnerSlickCarouselComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [
    {
      provide: 'HTTP_INTERCEPTORS',
      useClass: AppComponent,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
