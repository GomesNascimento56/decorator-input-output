import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
// scss inline
//  styles:[
//     `
//       .card-button{
//         background-color: #FFF;
//       }
//     `
//   ] 
})
export class CardButtonComponent {
  //botão para evento de clique
  @Output('buttonClick') buttonClickEmiter = new EventEmitter<boolean>();


  onButtonClick(){
    // teste no componente filho
    console.log(this.onButtonClick)
    //o tipo pode ser especificado ou não
    // enviando para componente pai
    this.buttonClickEmiter.emit(true);
  }
  
}
