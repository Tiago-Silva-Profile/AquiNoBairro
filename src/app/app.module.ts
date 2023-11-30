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
    AboutPartnerPromotionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
