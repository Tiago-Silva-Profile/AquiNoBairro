import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Valores mocados para o menu
  seguimentos: any[] = [
    {seguimento:'All Categories', icone:'assets/promotionImg/icon-menu/'},
    {seguimento:'Padaria', icone:'assets/promotionImg/icon-menu/padaria.png'},
    {seguimento:'Mercados', icone:'assets/promotionImg/icon-menu/mercearia.png'},
    {seguimento:'Lanchonetes & Restaurantes', icone:'assets/promotionImg/icon-menu/'},
    {seguimento:'Clubs & Acampamentos', icone:'assets/promotionImg/icon-menu/piscina.png'},
    {seguimento:'Lanchonetes', icone:'assets/promotionImg/icon-menu/hamburguer.png'},
    {seguimento:'Armazém', icone:'assets/promotionImg/icon-menu/armazem.png'},
    {seguimento:'Transporte', icone:'assets/promotionImg/icon-menu/caminhao-bau.png'}
  ]
}
