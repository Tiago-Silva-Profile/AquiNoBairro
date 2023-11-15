import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {

  promotions: any[] = [
    {promoImg:'assets/promotionImg/bakery.jpg', promoName:'bakery'},
    {promoImg:'assets/promotionImg/leisure.jpeg', promoName:'leisure'},
    {promoImg:'assets/promotionImg/Marketplace.jpeg', promoName:'Marketplace'},
    {promoImg:'assets/promotionImg/restaurant.jpeg', promoName:'restaurant'},
    {promoImg:'assets/promotionImg/storage.jpeg', promoName:'storage'}
 ]

 promotions2: string[] = [
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg',
  'assets/promotionImg/bakery.jpg'
]

}
