import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Products } from '../products/interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = environments.API_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/products`)
  }
  getProductById(id: number): Observable<Products | undefined> {
    return this.http.get<Products>(`${this.apiUrl}/products/${id}`)
      .pipe(
        catchError(err => of(undefined)
        ))
  }
}
