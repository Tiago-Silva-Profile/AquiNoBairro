import { Component, OnInit } from '@angular/core';
import { AboutPartnerServiceModule } from '../about-partner-service/about-partner-service.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutPartnerMenuComponent } from '../about-partner-menu/about-partner-menu.component';
import { empty } from 'rxjs';

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

  constructor(private veiculoService: AboutPartnerServiceModule,
              private menuPartner: AboutPartnerMenuComponent,
              private route: ActivatedRoute) {
    this.servicos = veiculoService.marcas
    // Realiza o filtro do valor passado pela URL
    this.marcaSelecionada = this.route.snapshot.params['value']

  }
  ngOnInit(): void {

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
      if(this.marcaSelecionada!= null){
        this.marcasFiltradas = this.veiculoService.filtrarMarcasPorTipo(this.menuPartner.redirecionar(value))
      }
      this.marcasFiltradas = this.veiculoService.filtrarMarcasPorTipo(value);

    }

}
