import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-partner-products',
  templateUrl: './about-partner-products.component.html',
  styleUrls: ['./about-partner-products.component.css']
})
export class AboutPartnerProductsComponent implements OnInit{

  products: any[] = [
    {imgService: 'assets/genesis-foto/veicular.png', titulo:'Seguro Veicular', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/veicular2.png', titulo:'Seguro Veicular Grande porte', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/consorcio.png', titulo:'Consórcio', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/imoveis.png', titulo:'Seguro de Imoveis', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/saude-genesis.png', titulo:'Planos de Saúde', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/seguro-logo1.jpg', titulo:'Seguro Financeiro', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/seguro-logo2.jpg', titulo:'Seguro Empresarial', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/seguro-logo3.jpg', titulo:'Seguro Familia', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
    {imgService: 'assets/genesis-foto/plano-saude-pet.png', titulo:'Plano Saúde Pet', textoImg:'Seguros De Veículos Com Todas As Seguradoras.' },
  ]

  ngOnInit(): void {



  }
}
