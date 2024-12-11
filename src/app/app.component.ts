import { Component } from '@angular/core';
//componente pai
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-componentes';
  // propriedades, valores do componentes pai
  canPlanType = 'Simples';
  canPlanPrice = 130;

  //andlePlanType - metodo q pega o valor q o usuario digitar como parametro
  // e atualizar a propriedade  'canPlanType'
  handlePlanType(text: string){
    this.canPlanType = text;
  }

  // canPlaType3 = 'Premium2';
  // canPlanPrice3 = 450;


}
