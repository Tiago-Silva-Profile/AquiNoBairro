import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PartnerRoutingModule } from './about-partner/partner-routing.module';

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
import { AboutPartnerFooterComponent } from './about-partner/about-partner-footer/about-partner-footer.component';
import { AboutPartnerWeComponent } from './about-partner/about-partner-we/about-partner-we.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutPartnerStartComponent } from './about-partner/about-partner-start/about-partner-start.component';
import { AboutPartnerProductsPortfolioComponent } from './about-partner/about-partner-products-portfolio/about-partner-products-portfolio.component';
import { FormsModule } from '@angular/forms';
import { AboutPartnerServiceModule } from './about-partner/about-partner-service/about-partner-service.module';

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
    AboutPartnerFooterComponent,
    AboutPartnerWeComponent,
    AboutPartnerStartComponent,
    AboutPartnerProductsPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AboutPartnerSlickCarouselComponent,
    PartnerRoutingModule,
    AppRoutingModule,
    FormsModule,
    AboutPartnerServiceModule
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
