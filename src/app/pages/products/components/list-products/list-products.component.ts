import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';

import { Products } from '../../../../interface/products.interface';
import { ProductsService } from 'src/app/service/products.service';
import Swal from 'sweetalert2';
import { debounceTime, distinct } from 'rxjs';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  public productsList: Products[] = [];
  private title: string = '';
  private price: number = 0;

  visibilityProductsCount: number = 12;
  startWith: number = 0;
  noMoreProducts: boolean = false;
  isLoading: boolean = false;
  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.searchProductsList$.pipe(
      debounceTime(300),
      distinct(),
    ).subscribe((products) => {
      this.productsList = products;
    });
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
