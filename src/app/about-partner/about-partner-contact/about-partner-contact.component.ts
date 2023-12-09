import { Component } from '@angular/core';

@Component({
  selector: 'app-about-partner-contact',
  templateUrl: './about-partner-contact.component.html',
  styleUrls: ['./about-partner-contact.component.css']
})
export class AboutPartnerContactComponent {

  horario: any[] = [
    {dia:'Segunda-feira', horario:'08:00 - 18:00'},
    {dia:'Terça-feira', horario:'08:00 - 18:00'},
    {dia:'Quarta-feira', horario:'08:00 - 18:00'},
    {dia:'Quinta-feira', horario:'08:00 - 18:00'},
    {dia:'Sexta-feira', horario:'08:00 - 18:00'},
    {dia:'Sabado', horario:'08:00 - 12:00'},
    {dia:'Domingo', horario:'Fechado'},
  ]

}
