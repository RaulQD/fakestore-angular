import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Products } from '../interface/products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = environments.API_URL;
  private searchProductsList = new BehaviorSubject<Products[]>([]);
  searchProductsList$ = this.searchProductsList.asObservable();

  setSearchProducts(products: Products[]) {
    this.searchProductsList.next(products);
   }
  //inject HttpClient
  private http = inject(HttpClient);


  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/products`).pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      }),
      tap((products) => { 
        this.setSearchProducts(products);
      }),
    )
  }
  getProductById(id: number): Observable<Products | undefined> {
    return this.http.get<Products>(`${this.apiUrl}/products/${id}`)
      .pipe(
        catchError(err => of(undefined)
        ))
  }
 
  searchProducts(title = ''): Observable<Products[]> {
    if (title.length === 0) { 
      return this.getAllProducts();
    }
    const params = new HttpParams()
      .set('title', title)
    const filter = `${this.apiUrl}/products/?`
    return this.http.get<Products[]>(filter, { params }).pipe(
      tap((products) => {
        this.setSearchProducts(products);
      }),
      catchError((err) => {
        return of([]);
      }),
      tap((products) => { 
        this.setSearchProducts(products);
      })
    );
  }
  
}
