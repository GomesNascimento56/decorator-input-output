import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card', //para chamar no html
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
 
  
})
export class CardComponent {

  @Input() planType: string = '';
  // {required: true} - obriga a passar o valor
  @Input({required: true}) planPrice: number = 0;

  
  // @Input() planType3: String = '';
  // @Input({required:true}) planPrice3: number = 0;

  buttonClicked(valueEmited:boolean){
    console.log('buttonClicked', valueEmited);
  }
}
 