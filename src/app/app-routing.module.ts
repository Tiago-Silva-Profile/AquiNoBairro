import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutPartnerComponent } from './about-partner/about-partner.component';
import { AboutPartnerWeComponent } from './about-partner/about-partner-we/about-partner-we.component';
import { AboutPartnerStartComponent } from './about-partner/about-partner-start/about-partner-start.component';
import { AboutPartnerProductsPortfolioComponent } from './about-partner/about-partner-products-portfolio/about-partner-products-portfolio.component';
import { AboutPartnerContactComponent } from './about-partner/about-partner-contact/about-partner-contact.component';


const routes: Routes = [
  { path:'', component: AboutPartnerStartComponent },
  { path:'partner/about', component: AboutPartnerWeComponent },
  { path:'partner/produtos', component: AboutPartnerProductsPortfolioComponent },
  { path:'partner/contatos', component: AboutPartnerContactComponent },
  // ... outras rotas, se houver
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
