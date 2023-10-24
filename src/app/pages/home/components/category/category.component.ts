import { Component, Input } from '@angular/core';
import { ImageCardCategory } from 'src/app/interface/categoryImage.interface';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
    @Input() imageCategory!: ImageCardCategory;
}
