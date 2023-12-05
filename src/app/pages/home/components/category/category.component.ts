import { Component, Input } from '@angular/core';
import { ImageCardCategory } from 'src/app/interface/categoryImage.interface';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
    imageCategory: ImageCardCategory[] = [
        {
            url: '../../../assets/img/new1.png',
            alt: 'new1',
            title: 'Sudadera y Camiseta',
            text: 'Colleción de invierno 2023',
        },
        {
            url: '../../../assets/img/new2.png',
            alt: 'new2',
            title: 'Pantalones y Chaquetas',
            text: 'Colleción de invierno 2023',
        },
        {
            url: '../../../assets/img/new3.png',
            alt: 'new3',
            title: 'Conjunto de verano',
            text: 'Colleción de invierno 2023',
        },
    ];
}
