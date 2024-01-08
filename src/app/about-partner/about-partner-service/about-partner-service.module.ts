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
    { tipo: 'Seguros', marca: 'Marca A', imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A', imgService: 'assets/genesis-foto/veicular2.png', titulo:'Seguro Veicular Grande porte', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A', imgService: 'assets/genesis-foto/consorcio.png', titulo:'Consórcio', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A', imgService: 'assets/genesis-foto/imoveis.png', titulo:'Seguro de Imoveis', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca A', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca A', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca A', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca A', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'Marca A', imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Financeiro', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo2.jpg', titulo:'Seguro Empresarial', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'Marca A', imgService: 'assets/genesis-foto/seguro-logo3.jpg', titulo:'Seguro Familia', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca A', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca A', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca A', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca A', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca A', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Pet', marca: 'Marca A', imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },

    // Adicione mais marcas conforme necessário
  ];

  filtrarMarcasPorTipo(tipo: string): string[] {
    // Lógica para filtrar marcas com base no tipo
    const marcasFiltradas = this.marcas
      .filter((marca) => marca.tipo === tipo)
      .map((marca) => marca.marca);

    return Array.from(new Set(marcasFiltradas)); // Remove duplicatas, se houver
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
