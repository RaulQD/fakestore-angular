import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from 'src/app/pages/products/interface/products.interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private _cartItems: Products[] = [];
  /* `private cart$ = new BehaviorSubject<Products[]>([]);` is creating a private variable `cart$` of
  type `BehaviorSubject<Products[]>`. */
  private shoppingCart = new BehaviorSubject<Products[]>([]);
  shoppingCart$ = this.shoppingCart.asObservable();
  
  addToCart():void {}
}
