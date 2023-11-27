import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  region: any[] =[
    { uf:"Acre", capitais:"Rio Branco", siglas:"AC"},
    { uf:"Alagoas", capitais:"Maceió", siglas:"AL"},
    { uf:"Amapá", capitais:"Macapá", siglas:"AP"},
    { uf:"Amazonas", capitais:"Manaus", siglas:"AM"},
    { uf:"Bahia", capitais:"Salvador", siglas:"BA"},
    { uf:"Ceará", capitais:"Fortaleza", siglas:"CE"},
    { uf:"Distrito Federal*", capitais:"Brasília", siglas:"DF"},
    { uf:"Espírito Santo", capitais:"Vitória", siglas:"ES"},
    { uf:"Goiás", capitais:"Goiânia", siglas:"GO"},
    { uf:"Maranhão", capitais:"São Luís", siglas:"MA"},
    { uf:"Mato Grosso", capitais:"Cuiabá", siglas:"MT"},
    { uf:"Mato Grosso do Sul", capitais:"Campo Grande", siglas:"MS"},
    { uf:"Minas Gerais", capitais:"Belo Horizonte", siglas:"MG"},
    { uf:"Pará", capitais:"Belém", siglas:"PA"},
    { uf:"Paraíba", capitais:"João Pessoa", siglas:"PB"},
    { uf:"Paraná", capitais:"Curitiba", siglas:"PR"},
    { uf:"Pernambuco", capitais:"Recife", siglas:"PE"},
    { uf:"Piauí", capitais:"Teresina", siglas:"PI"},
    { uf:"Rio de Janeiro", capitais:"Rio de Janeiro", siglas:"RJ"},
    { uf:"Rio Grande do Norte", capitais:"Natal", siglas:"RN"},
    { uf:"Rio Grande do Sul", capitais:"Porto Alegre", siglas:"RS"},
    { uf:"Rondônia", capitais:"Porto Velho", siglas:"RO"},
    { uf:"Roraima", capitais:"Boa Vista", siglas:"RR"},
    { uf:"Santa Catarina", capitais:"Florianópolis", siglas:"SC"},
    { uf:"São Paulo", capitais:"São Paulo", siglas:"SP"},
    { uf:"Sergipe", capitais:"Aracaju", siglas:"SE"},
    { uf:"Tocantins", capitais:"Palmas", siglas:"TO"}
  ]
}
