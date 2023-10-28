import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../interface/products.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  public productsList: Products[] = [];
  
  visibilityProductsCount: number = 12;
  startWith: number = 0;  
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getProducts();
  }
  private productsService = inject(ProductsService);

  getProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.productsList = products;
      console.log(products);
    })
  }
  loadProducts() {
    this.isLoading = true;
    setTimeout(() => {
      this.visibilityProductsCount += 15;
      this.isLoading = false;
    }, 2000);
  }
}
