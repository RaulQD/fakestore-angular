import { Component, Input } from '@angular/core';
import { Products } from '../../interface/products.interface';

@Component({
  selector: 'app-card-produts',
  templateUrl: './card-produts.component.html',
  styleUrls: ['./card-produts.component.css']
})
export class CardProdutsComponent {
  @Input() products!: Products;
  randomNumber: number = 0;

  truncateString(text: string | undefined, maxLength: number): string {

    //valida si el texto es undefined o null y retorna un string vacio
    if (!text) return '';
    //valida si el texto es menor o igual al maxLength y retorna el texto
    if (text.length <= maxLength) return text;
    //retorna el texto truncado con los puntos suspensivos
    return text.substring(0, maxLength) + '...';
  }
}
