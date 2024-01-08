import { Component, OnInit } from '@angular/core';
import { AboutPartnerServiceModule } from '../about-partner-service/about-partner-service.module';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-about-partner-products-portfolio',
  templateUrl: './about-partner-products-portfolio.component.html',
  styleUrls: ['./about-partner-products-portfolio.component.css']
})

export class AboutPartnerProductsPortfolioComponent implements OnInit {

  tipoSelecionado!: string;
  servicos: any[];
  marcasFiltradas: string[] = [];
  colabs:any[]=[];
  marcaSelecionada: any;
  marcaSelecionadaUrl: any;

  constructor(private veiculoService: AboutPartnerServiceModule,
              private route: ActivatedRoute
             ,private appRoutingModule: AppRoutingModule ) {
      /*Busca do modulo service trazendo o json completo referente as marcas */
      this.servicos = veiculoService.marcas

  }


  ngOnInit(): void {

    // Realiza o filtro do valor passado pela URL
    this.marcaSelecionadaUrl = this.route.snapshot.paramMap.get('value')
    this.realizarFiltro(this.marcaSelecionadaUrl)


    /**
     *  Realiza o filtro dos produtos que esta cadastrado no portfolio do cliente
     */
        this.veiculoService.getTipos().subscribe((tipos) => {
          this.marcaSelecionada = tipos;
        });


  }

    realizarFiltro(value: string) {
      // Chame o serviço para realizar o filtro
      /**
       * CORRIGIR ESTE FILTRO QUE ESTA QUEBRADO COM URGENCIA!
       */
      this.marcasFiltradas = this.veiculoService.filtrarMarcasPorTipo(value);

    }

}
