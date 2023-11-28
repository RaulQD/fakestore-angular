import { Injectable, inject } from '@angular/core';
import { Products } from '../interface/products.interface';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private apiUrl: string = environments.API_URL;
  private _searchProductsSubject = new BehaviorSubject<Products[]>([]);
  searchProductsSubJect$ = this._searchProductsSubject.asObservable();

  setSearchProducts(products: Products[]) {
    this._searchProductsSubject.next(products);
  }

  //inject HttpClient
  private http = inject(HttpClient);

  
}
