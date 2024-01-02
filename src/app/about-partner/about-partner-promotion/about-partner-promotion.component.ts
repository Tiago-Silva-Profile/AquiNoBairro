import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-partner-promotion',
  templateUrl: './about-partner-promotion.component.html',
  styleUrls: ['./about-partner-promotion.component.css']
})
export class AboutPartnerPromotionComponent implements OnInit{

  promotions: any[] = []
  promotions2: string[] = []

  ngOnInit(): void {
  this.promotions = [
    {promoImg:'assets/genesis-foto/seguro-logo.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo1.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo2.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo3.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo4.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo5.jpg', promoName:'bakery'},
    {promoImg:'assets/genesis-foto/seguro-logo6.jpg', promoName:'bakery'},
  ]

  this.promotions2 = [
    'assets/promotionImg/bakery.jpg',
    'assets/promotionImg/bakery.jpg',
    'assets/promotionImg/bakery.jpg',
    'assets/promotionImg/bakery.jpg',
    'assets/promotionImg/bakery.jpg'
  ]



  }
}
