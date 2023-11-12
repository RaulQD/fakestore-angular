import { Component, OnInit, inject } from '@angular/core';
import { Products } from '../products/interface/products.interface';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { StoreService } from '../service/store.service';
import { ProductsService } from '../service/products.service';


@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

    public products: Products = {
        id: 0,
        title: '',
        price: 0,
        description: '',
        images: [''],
        category: {
            id: 0,
            name: '',
            image: '',
        }
    }
    private productService = inject(ProductsService);
    private storeService = inject(StoreService);
    private activeRouted = inject(ActivatedRoute);
    private router = inject(Router);

    ngOnInit(): void {
        this.activeRouted.params
            .pipe(
                switchMap(({ id }) => this.productService.getProductById(id)),
            ).subscribe((product) => {
                if (!product) return this.router.navigate(['/fakestore/products'])
                return this.products = product;
            })
    }

    onAddToCart() {
        const product = {
            ...this.products,
            quantity: 1
        }
        this.storeService.addToCart(product);
    }
}
