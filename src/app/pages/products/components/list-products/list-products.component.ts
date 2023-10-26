import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../interface/products.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

 public productsList:Products[] = [];

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
}
