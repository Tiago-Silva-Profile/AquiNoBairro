import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
    { tipo: 'Seguro de Veículos', marca: 'Marca A' },
    { tipo: 'Seguro de Veículos', marca: 'Marca B' },
    { tipo: 'Moto', marca: 'Marca C' },
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

}
