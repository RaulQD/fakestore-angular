import { Component, Input, inject } from '@angular/core';
import { ItemsCart, Products } from '../../interface/products.interface';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/pages/service/store.service';


@Component({
  selector: 'app-card-produts',
  templateUrl: './card-produts.component.html',
  styleUrls: ['./card-produts.component.css']
})
export class CardProdutsComponent {
  @Input() products!: Products;

  private router = inject(Router);
  private storeService = inject(StoreService);

  truncateString(text: string, maxLength: number): string {

    //valida si el texto es menor o igual al maxLength y retorna el texto
    if (text.length <= maxLength) return text;
    //retorna el texto truncado con los puntos suspensivos
    return text.substring(0, maxLength) + '...';
  }
  showDetails() {
    this.router.navigateByUrl(`/fakestore/details/products/${this.products.id}`)
  }
  onAddToCart() {
    const product = {
      ...this.products,
      quantity: 1
    }

    this.storeService.addToCart(product);
  }
}
