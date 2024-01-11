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
    { tipo: 'Seguros', marca: 'alfaSeguro', imgService: 'assets/seguradoras/alfaSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'aliroSeguro', imgService: 'assets/seguradoras/aliroSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'allianzSeguro', imgService: 'assets/seguradoras/allianzSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'azulSeguro', imgService: 'assets/seguradoras/azulSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'bradescoSeguro', imgService: 'assets/seguradoras/bradescoSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'darwinSeguro', imgService: 'assets/seguradoras/darwinSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'hdiSeguro', imgService: 'assets/seguradoras/hdiSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'libertySeguro', imgService: 'assets/seguradoras/libertySeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'portoSeguro', imgService: 'assets/seguradoras/portoSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Seguros', marca: 'suhaiSeguro', imgService: 'assets/seguradoras/suhaiSeguro.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'amilSaude', imgService: 'assets/planosSaude/amilSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'bradescoSaude', imgService: 'assets/planosSaude/bradescoSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'maisSaude', imgService: 'assets/planosSaude/maisSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'nextSaude', imgService: 'assets/planosSaude/nextSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'nossaSaude', imgService: 'assets/planosSaude/nossaSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'planosSaude', imgService: 'assets/planosSaude/planosSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'qualicorpSaude', imgService: 'assets/planosSaude/qualicorpSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'sulAmericaSaude', imgService: 'assets/planosSaude/sulAmericaSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Saude', marca: 'unimedSaude', imgService: 'assets/planosSaude/unimedSaude.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/amilOdonto.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/bradescoOdonto.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/hapvidaOdonto.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/odontoBase.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/odontoPrev.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/odontoSaude.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/premiumOdonto.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/sampOdonto.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    { tipo: 'Odontologico', marca: '', imgService: 'assets/planosOdonto/wOdonto.png', titulo:'Plano Odontologico', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },

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
