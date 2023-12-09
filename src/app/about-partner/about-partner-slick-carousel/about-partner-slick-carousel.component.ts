import { Component } from '@angular/core';

@Component({
  selector: 'app-about-partner-slick-carousel',
  templateUrl: './about-partner-slick-carousel.component.html',
  styleUrls: ['./about-partner-slick-carousel.component.css']
})
export class AboutPartnerSlickCarouselComponent {

  slickConfig = {
    slidesToShow: 3, // Número de itens visíveis ao mesmo tempo
    slidesToScroll: 1, // Número de itens a serem movidos por vez
    autoplay: true, // Ativa a reprodução automática
    autoplaySpeed: 2000, // Velocidade da reprodução automática em milissegundos
    infinite: true, // Habilita o movimento contínuo do carrossel
  };

  itens = [
    { id: 1, imagem: 'caminho/para/imagem1.jpg' },
    { id: 2, imagem: 'caminho/para/imagem2.jpg' },
    { id: 3, imagem: 'caminho/para/imagem3.jpg' },
    // Adicione mais itens conforme necessário
  ];
}
