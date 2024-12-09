import { Component } from '@angular/core';

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

  // canPlaType3 = 'Premium2';
  // canPlanPrice3 = 450;


}
