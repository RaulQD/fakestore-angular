import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/interface/products.interface';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-shared-search',
  template: `
      <div class="search-box">
        <input type="text" placeholder="Buscar productos" #inputSearch (keyup.enter)="onSearch()">
        <i class="bx bx-search-alt-2 search-icon"></i>
      </div>
  `,
  styles: [`
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
      }

      .search-box input {
          width: 400px;
          padding: 0.75rem 1rem ;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
      }
      .search-box input::placeholder{
          color: #ccc;
      }

      .search-box .search-icon {
          position: absolute;
          top: 50%;
          right:0.75rem;
          z-index: 3;
          transform: translateY(-50%);
          color: var(--primary-color);
          font-size: 22px;

      }
    `,
  ],
})
export class SharedSearchComponent implements OnInit, OnDestroy {


  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  public productsList: Products[] = [];
  subscription!: Subscription;
  private searchResultService = inject(ProductsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.subscription = this.searchResultService.getAllProducts().subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSearch() {
    const title = this.inputSearch.nativeElement.value;
    this.subscription = this.searchResultService.searchProducts(title).subscribe((products) => {
      console.log('newTag', { title }, { products });
    });
  }
}
