import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';

import { Products } from '../../../../interface/products.interface';
import { ProductsService } from 'src/app/service/products.service';
import Swal from 'sweetalert2';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public productsList: Products[] = [];
  public notFound: boolean = false;
  public loadingProducts: boolean = false;


  public visibilityProductsCount: number = 12;
  public startWith: number = 0;
  public isLoading: boolean = false;
  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loadingProducts = true;
    setTimeout(() => {
      this.productsService.searchProductsList$.subscribe((products) => {
        this.productsList = products;
        this.loadingProducts = false;
        this.notFound = this.productsList.length > 0 ? false : true;
      });
    }, 2000);

  }

  loadProducts() {
    this.isLoading = true;
    setTimeout(() => {
      const totalProducts = this.productsList.length;
      const currentProductsCount = this.visibilityProductsCount;
      const productsPerPage = 12;
      if (currentProductsCount < totalProducts) {
        this.visibilityProductsCount += productsPerPage;
      }
      if (currentProductsCount >= totalProducts) {
        Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            title: 'custom-popup-title-class',
            icon: 'custom-popup-icon-class',
          },
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        }).fire({
          icon: 'info',
          title: 'No hay productos para mostrar.'
        });
      }
      this.isLoading = false;
    }, 1000);
  }
}
