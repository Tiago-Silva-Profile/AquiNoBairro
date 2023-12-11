import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about-partner-slick-carousel',
  templateUrl: './about-partner-slick-carousel.component.html',
  styleUrls: ['./about-partner-slick-carousel.component.css']
})
export class AboutPartnerSlickCarouselComponent implements OnInit{

  slickConfig = {
    slidesToShow: 3, // Número de itens visíveis ao mesmo tempo
    slidesToScroll: 1, // Número de itens a serem movidos por vez
    autoplay: true, // Ativa a reprodução automática
    autoplaySpeed: 2000, // Velocidade da reprodução automática em milissegundos
    infinite: true, // Habilita o movimento contínuo do carrossel
  };

  itens = [
    { id: 1, imagem: 'assets/genesis-foto/veicular.jpeg' },
    { id: 2, imagem: 'assets/genesis-foto/veicular.jpeg' },
    { id: 3, imagem: 'assets/genesis-foto/veicular.jpeg' },
    { id: 4, imagem: 'assets/genesis-foto/veicular.jpeg' },
    { id: 5, imagem: 'assets/genesis-foto/bradesco-saude.png' },
    { id: 7, imagem: 'assets/genesis-foto/veicular.jpeg' },
    { id: 8, imagem: 'assets/genesis-foto/bradesco-saude.png' },
    { id: 9, imagem: 'assets/genesis-foto/veicular.jpeg' },

    // Adicione mais itens conforme necessário
  ];

  ngOnInit(): void {

    document.addEventListener("DOMContentLoaded", function () {
      const swiper = new Swiper('.swiper-container', {
        // Configurações opcionais
        slidesPerView: 5,
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });

  }


}
