import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card', //para chamar no html
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
 
  
})
export class CardComponent {

  // {required: true} - obriga a passar o valor
  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;

  // guardando valor atual
  private _planType: string ='';

  // alocando valor na variavel privada
  @Input('planType') 
  set  planType(value: string){
    this._planType = value.toUpperCase();
  }
  //retornando valor do _planType
  get planType(): string {
   return this._planType
}

  buttonClicked(valueEmited:boolean){
    console.log('buttonClicked', valueEmited);
  }
}
 