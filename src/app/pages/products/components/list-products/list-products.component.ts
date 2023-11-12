import { Component, OnInit, inject } from '@angular/core';

import { Products } from '../../interface/products.interface';
import { ProductsService } from 'src/app/pages/service/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public productsList: Products[] = [];

  visibilityProductsCount: number = 12;
  startWith: number = 0;
  isLoading: boolean = false;
  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.productsList = products;
    })
  }

  loadProducts() {
    this.isLoading = true;
    setTimeout(() => {
      this.visibilityProductsCount += 15;
      this.isLoading = false;
    }, 1000);
  }
}
