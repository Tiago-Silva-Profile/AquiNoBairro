import { Component } from '@angular/core';
import { AboutPartnerServiceModule } from '../about-partner-service/about-partner-service.module';

@Component({
  selector: 'app-about-partner-products-portfolio',
  templateUrl: './about-partner-products-portfolio.component.html',
  styleUrls: ['./about-partner-products-portfolio.component.css']
})

export class AboutPartnerProductsPortfolioComponent {

  tipoSelecionado!: string;
  servicos: string[];
  marcasFiltradas: string[] = [];
  colabs:any[]=[];

  constructor(private veiculoService: AboutPartnerServiceModule) {
    this.servicos = veiculoService.marcas

  }

  servico(){
      this.servicos = this.veiculoService.filtrarMarcas('tipo');
  }

  realizarFiltro() {
    // Chame o serviço para realizar o filtro
    this.marcasFiltradas = this.veiculoService.filtrarMarcasPorTipo(this.tipoSelecionado);
    console.log(this.marcasFiltradas);

  }

}
