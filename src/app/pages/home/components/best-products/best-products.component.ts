import { Component } from '@angular/core';
import { ImageCardProducts } from 'src/app/interface/productImage.interface';

@Component({
    selector: 'app-best-products',
    templateUrl: './best-products.component.html',
    styleUrls: ['./best-products.component.css'],
})
export class BestProductsComponent {
    products: ImageCardProducts[] = [
        {
            icon: '../../../assets/img/polera1.png',
            error: 'product1',
            price: 152,
            name: 'Polera Peace and Love',
        },
        {
            icon: '../../../assets/img/zapatillas4.png',
            error: 'product2',
            price: 179,
            name: 'Zapatillas Adidas',
        },

        {
            icon: '../../../assets/img/casaca2.png',
            error: 'product4',
            price: 189,
            name: 'Casaca One Dark ',
        },
        {
            icon: '../../../assets/img/zapatillas2.png',
            error: 'product3',
            price: 159,
            name: 'Casaca Deportiva ',
        },
        {
            icon: '../../../assets/img/short1.png',
            error: 'short1',
            price: 89,
            name: 'Colleción de invierno 2023',
        },
        {
            icon: '../../../assets/img/casaca1.png',
            error: 'casaca1',
            price: 149,
            name: 'Casaca Deportiva ',
        },
    ];
}
