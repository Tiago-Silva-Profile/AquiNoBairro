import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  region: any[] =[
    { uf:"Acre", capitais:"Rio Branco", siglas:"AC"},
    { uf:"Alagoas", capitais:"Macei�", siglas:"AL"},
    { uf:"Amap�", capitais:"Macap�", siglas:"AP"},
    { uf:"Amazonas", capitais:"Manaus", siglas:"AM"},
    { uf:"Bahia", capitais:"Salvador", siglas:"BA"},
    { uf:"Cear�", capitais:"Fortaleza", siglas:"CE"},
    { uf:"Distrito Federal*", capitais:"Bras�lia", siglas:"DF"},
    { uf:"Esp�rito Santo", capitais:"Vit�ria", siglas:"ES"},
    { uf:"Goi�s", capitais:"Goi�nia", siglas:"GO"},
    { uf:"Maranh�o", capitais:"S�o Lu�s", siglas:"MA"},
    { uf:"Mato Grosso", capitais:"Cuiab�", siglas:"MT"},
    { uf:"Mato Grosso do Sul", capitais:"Campo Grande", siglas:"MS"},
    { uf:"Minas Gerais", capitais:"Belo Horizonte", siglas:"MG"},
    { uf:"Par�", capitais:"Bel�m", siglas:"PA"},
    { uf:"Para�ba", capitais:"Jo�o Pessoa", siglas:"PB"},
    { uf:"Paran�", capitais:"Curitiba", siglas:"PR"},
    { uf:"Pernambuco", capitais:"Recife", siglas:"PE"},
    { uf:"Piau�", capitais:"Teresina", siglas:"PI"},
    { uf:"Rio de Janeiro", capitais:"Rio de Janeiro", siglas:"RJ"},
    { uf:"Rio Grande do Norte", capitais:"Natal", siglas:"RN"},
    { uf:"Rio Grande do Sul", capitais:"Porto Alegre", siglas:"RS"},
    { uf:"Rond�nia", capitais:"Porto Velho", siglas:"RO"},
    { uf:"Roraima", capitais:"Boa Vista", siglas:"RR"},
    { uf:"Santa Catarina", capitais:"Florian�polis", siglas:"SC"},
    { uf:"S�o Paulo", capitais:"S�o Paulo", siglas:"SP"},
    { uf:"Sergipe", capitais:"Aracaju", siglas:"SE"},
    { uf:"Tocantins", capitais:"Palmas", siglas:"TO"}
  ]
}
