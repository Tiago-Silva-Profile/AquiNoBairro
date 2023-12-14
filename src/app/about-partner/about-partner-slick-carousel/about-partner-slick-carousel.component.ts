import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about-partner-slick-carousel',
  standalone:true,
  imports:[CommonModule, SlickCarouselModule],
  templateUrl: './about-partner-slick-carousel.component.html',
  styleUrls: ['./about-partner-slick-carousel.component.css'],
})
export class AboutPartnerSlickCarouselComponent implements OnInit{

  slides = [
    {imagem: 'assets/genesis-foto/operadoras_saude/amil.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/bradesco.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/Hapvida.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/NotreDame.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/porto-seguro.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/qsaude.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/sulamerica.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/unimed.png', plano:""},
    {imagem: 'assets/genesis-foto/operadoras_saude/vertical.png', plano:""}

    // Adicione mais itens conforme necessário
  ];

  slideConfig = {
    "slidesToShow": 7,
    "slidesToScroll": 1,
    "autoplay": true,
    "infinite":true,
    "pauseOnHover": true,
    "dots": true,
    "arrows": true,
    "autoplaySpeed": 2000};


  addSlide() {
    this.slides.push()
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(event: any) {
    console.log('slick initialized');
  }

  breakpoint(event: any) {
    console.log('breakpoint');
  }

  afterChange(event: any) {
    console.log('afterChange');
  }

  beforeChange(event: any) {
    console.log('beforeChange');
  }

  ngOnInit(): void {

    // document.addEventListener("DOMContentLoaded", function () {
    //   const swiper = new Swiper('.swiper-container', {
    //     // Configurações opcionais
    //     slidesPerView: 5,
    //     spaceBetween: 5,
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //   });
    // });

  }


}
