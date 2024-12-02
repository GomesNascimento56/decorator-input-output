import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card', //para chamar no html
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  //isola o estilo em um componente em especifico,
  //não deixar vazar o estilo para outro componente.
  encapsulation: ViewEncapsulation.Emulated,
  
})
export class CardComponent {

  //interpolação video 27 com typeScript
  // 1° Exemplo  de  interpolação
  tipo = 'Simples';
  preco = 1000;

  getFullPreco(){
    return 'R$' + this.preco + ',00/Mês';
  }

  //2° Exemplo  de  interpolação
  plano = {
    info:{
      tipo: 'Simples',
      preco: 100,
    }
   
  }
}
