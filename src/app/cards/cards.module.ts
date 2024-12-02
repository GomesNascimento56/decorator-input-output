import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { Card3Component } from '../card-3/card-3.component';
import { CardTresButtonComponent } from '../card-tres-button/card-tres-button.component';
import { CancelButtonComponent } from '../cancel-button/cancel-button.component';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    Card3Component,
    CardTresButtonComponent,
    CancelButtonComponent,
    CardRoxoButtonComponent
  ],
  //quando quer exportar componentes dentro de outro módulo
  //exports - esses componente podem ser consumidos
  exports:[
    CardComponent,
    CardRoxoComponent,
    Card3Component,
    //componente filho como CardButtonComponent ou CardRoxoButtonComponent não precisar ser exportado
    // já que o componente CardComponent e CardRoxo estam chamando eles
    //CardButtonComponent,

    //CardRoxoButtonComponent
  ],
  imports: [
    CommonModule,
    //https://material.angular.io/  MatSliderModule
    MatSliderModule,
    
  ]
})
export class CardsModule { }
