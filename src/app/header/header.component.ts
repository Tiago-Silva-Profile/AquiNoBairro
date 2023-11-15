import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Valores mocados para o menu
  seguimentos: any[] = [
    {seguimento:'All Categories', icone:'Teste'},
    {seguimento:'Padaria', icone:'Teste'},
    {seguimento:'Mercados', icone:'Teste'},
    {seguimento:'Lanchonetes & Restaurantes', icone:'Teste'},
    {seguimento:'Clubs & Acampamentos', icone:'Teste'},
    {seguimento:'Lanchonetes', icone:'Teste'},
    {seguimento:'Armazém', icone:'Teste'},
    {seguimento:'Lanchonetes', icone:'Teste'}
  ]
}
