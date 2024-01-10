import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AboutPartnerServiceModule {

  /**
   * Siglas e significados
   * seg = seguradoras
   * sau = planos de saúde
   * odo = Planos Odontologicos
   * pet = Plano de saúde pet
   * vid = plano de vida
   */
  productsPartner:any[]=[
    {
      seg:{
          img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:''
      },
      sau:{
          img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:''
      },
      odo:{
          img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:''
      },
      pet:{
          img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:''
      },
      vid:{

      },
    }
  ]

  colabs:any[] =[
    {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
    // {img: 'assets/genesis-foto/porto-seguro-logo.jpg', colab:'', ocupacao:'' },
  ]


  marcas: any[] = [
    { tipo: 'Seguros', marca: 'Marca A.1', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A.2', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A.3', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A.4', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca b', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca b', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca b', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca b', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca b', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca c', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca c', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca c', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca c', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca c', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca d.1', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca d.2', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca e', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca e', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca e', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca e', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca e', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca e', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },

    // Adicione mais marcas conforme necessário
  ];

  filtrarMarcasPorTipo(tipo: string): any[] {
    // Lógica para filtrar marcas com base no tipo
    return this.marcas
      .filter((marca) => marca.tipo === tipo)
      .map(({marca, imgService, titulo, textoImg}) => ({marca, imgService, titulo, textoImg}));
  }

  filtrarMarcas(tipo: string): string[]{
    const marcas = Array.from(new Set(this.marcas.map((marca) => marca[tipo])));
    return marcas;
  }

  getTipos(): Observable<string[]> {
    const tiposUnicos = Array.from(new Set(this.marcas.map(item => item.tipo)));
    return of(tiposUnicos);
  }

}
