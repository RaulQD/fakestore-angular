import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
          padding: 0.75rem 1rem ;
          border: 1px solid #75869c;
          border-radius: 4px;
          font-size: 14px;
          width:100%;
          outline: none;
      }
      .search-box input::placeholder{
          color:#75869c;
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
      @media screen and (min-width: 563px) {
        .search-box input{
          width: 400px;
        }
      }
    `,
  ],
})
export class SharedSearchComponent implements OnInit, OnDestroy {


  /* The `@ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;` line is declaring a
  ViewChild decorator that allows the component to access a reference to an element in the template. */
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  public productsList: Products[] = [];
  subscription!: Subscription;
  private searchResultService = inject(ProductsService);


  ngOnInit(): void {
    this.subscription = this.searchResultService.getAllProducts().subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  /**
   * The `onSearch()` function retrieves the value of an input field, calls a service to search for
   * products based on that value, and logs the search title and resulting products to the console.
   */
  onSearch() {
    const title = this.inputSearch.nativeElement.value;
    this.subscription = this.searchResultService.searchProducts(title).subscribe((products) => {
      this.productsList = products;
      console.log(title, this.productsList);
    });
  }
}
