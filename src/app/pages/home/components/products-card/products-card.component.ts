import { Component, Input } from '@angular/core';
import { ImageCardProducts } from 'src/app/interface/productImage.interface';

@Component({
    selector: 'app-products-card',
    templateUrl: './products-card.component.html',
    styleUrls: ['./products-card.component.css'],
})
export class ProductsCardComponent {
    @Input() imageProducts!: ImageCardProducts;
}
