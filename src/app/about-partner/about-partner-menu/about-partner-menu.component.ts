import { AboutPartnerProductsPortfolioComponent } from './../about-partner-products-portfolio/about-partner-products-portfolio.component';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about-partner-menu',
  templateUrl: './about-partner-menu.component.html',
  styleUrls: ['./about-partner-menu.component.css']
})
export class AboutPartnerMenuComponent implements OnInit{

  selectedMarca: string = '';

  productService:any[] = [
    {service:'Planos de Saúde', caminho:'/partner/seguradoras'},
    {service:'Planos Odontologicos', caminho:'/partner/seguradoras'},
    {service:'Planos de Saúde Pet', caminho:'/partner/seguradoras'},
    {service:'Seguro Veícular', caminho:'/partner/seguradoras'},
    {service:'Seguro de Vida', caminho:'/partner/seguradoras'},
  ]

  //Sempre que a navegação for concluída, a página será rolada para o topo.
  constructor(private router: Router
             ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  redirecionar(value: string) {
    this.router.navigate(['partner/produtos',value ]);
  }
  ngOnInit(): void {

  }

}
