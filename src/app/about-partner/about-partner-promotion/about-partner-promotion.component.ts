import { Component } from '@angular/core';

@Component({
  selector: 'app-about-partner-promotion',
  templateUrl: './about-partner-promotion.component.html',
  styleUrls: ['./about-partner-promotion.component.css']
})
export class AboutPartnerPromotionComponent {
  promotions: any[] = [
    {promoImg:'assets/genesis-foto/seguro-logo.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo1.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo2.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo3.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo4.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo5.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo6.jpg', promoName:'bakery'},
 ]

 promotions2: string[] = [
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg'
]

}
