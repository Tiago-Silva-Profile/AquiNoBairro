import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  offers: any[] = [
    {id:1, fornecedor:'Prestador One', seguimento: 'padaria', offersImg:'assets/promotionImg/bakery.jpg', promoName:'storage', oport:'Click e conheça esta oportunidade 1'},
    {id:2, fornecedor:'Prestador Two', seguimento: 'padaria', offersImg:'assets/promotionImg/bakery.jpg', promoName:'storage', oport:'Click e conheça esta oportunidade 2'},
    {id:3, fornecedor:'Prestador Three', seguimento: 'padaria', offersImg:'assets/promotionImg/bakery.jpg', promoName:'storage', oport:'Click e conheça esta oportunidade 3'},
    {id:4, fornecedor:'Prestador Four', seguimento: 'deposito', offersImg:'assets/promotionImg/storage.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 4'},
    {id:5, fornecedor:'Prestador Five', seguimento: 'deposito', offersImg:'assets/promotionImg/storage.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 5'},
    {id:6, fornecedor:'Prestador Six', seguimento: 'deposito', offersImg:'assets/promotionImg/storage.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 6'},
    {id:7, fornecedor:'Prestador Seven', seguimento: 'restaurante', offersImg:'assets/promotionImg/restaurant.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 7'},
    {id:8, fornecedor:'Prestador Eight', seguimento: 'restaurante', offersImg:'assets/promotionImg/restaurant.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 8'},
    {id:9, fornecedor:'Prestador Nine', seguimento: 'restaurante', offersImg:'assets/promotionImg/restaurant.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 9'},
    {id:10,fornecedor:'Prestador Ten', seguimento: 'mercados', offersImg:'assets/promotionImg/Marketplace.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 10'},
    {id:11,fornecedor:'Prestador Eleven', seguimento: 'mercados', offersImg:'assets/promotionImg/Marketplace.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 11'},
    {id:12,fornecedor:'Prestador Twelve', seguimento: 'mercados', offersImg:'assets/promotionImg/Marketplace.jpeg', promoName:'storage', oport:'Click e conheça esta oportunidade 12'},
  ]
}
