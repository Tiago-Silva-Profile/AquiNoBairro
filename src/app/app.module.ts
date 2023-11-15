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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromotionComponent,
    MainContentComponent,
    OfferComponent,
    AsideComponent,
    FooterComponent,
    AboutPartnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
