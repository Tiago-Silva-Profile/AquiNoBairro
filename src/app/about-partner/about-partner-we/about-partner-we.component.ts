import { Component } from '@angular/core';

@Component({
  selector: 'app-about-partner-we',
  templateUrl: './about-partner-we.component.html',
  styleUrls: ['./about-partner-we.component.css']
})
export class AboutPartnerWeComponent {

  colabs:any[] =[
    {img: 'assets/genesis-foto/nossa-equipe/colab.png', colab:'Simone', ocupacao:'Especialista em Planos' },
    {img: 'assets/genesis-foto/nossa-equipe/colab1.png', colab:'Rayssa', ocupacao:'Especialista em Planos' },
    {img: 'assets/genesis-foto/nossa-equipe/colab2.png', colab:'Mariangela', ocupacao:'Especialista em Planos' },
    {img: 'assets/genesis-foto/nossa-equipe/colab3.png', colab:'Simone', ocupacao:'Especialista em Planos' }
  ]

}
