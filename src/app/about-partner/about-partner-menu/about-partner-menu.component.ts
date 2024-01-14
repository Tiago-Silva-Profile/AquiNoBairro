import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about-partner-menu',
  templateUrl: './about-partner-menu.component.html',
  styleUrls: ['./about-partner-menu.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AboutPartnerMenuComponent implements OnInit{

  selectedMarca: string = '';
  isScrolled = false;

  productService:any[] = [
    {service:'Planos de Saúde', plano:'Saude'},
    {service:'Planos Odontologicos', plano:''},
    {service:'Planos de Saúde Pet', plano:''},
    {service:'Seguro Veícular', plano:'Seguros'},
    {service:'Seguro de Vida', plano:''},
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


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica a posição de rolagem para determinar se o usuário rolou para baixo
    this.isScrolled = window.scrollY > 0;
  }

  ngOnInit(): void {

  }

}
