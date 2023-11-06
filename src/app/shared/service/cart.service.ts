import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemsCart } from 'src/app/pages/products/interface/products.interface';


@Injectable({
    providedIn: 'root'
})
export class CartService {

    private _cartItems: ItemsCart[] = [];

    private shoppingCart = new BehaviorSubject<ItemsCart[]>([]);

    getProductsInCart() {
        return this.shoppingCart.asObservable();
    }

    addToCart(cartItem: ItemsCart): void {
        //Crea una copia del carrito de compras para evitar modificar el original
        const items = [...this._cartItems];
        //busca si el item ya existe en el carrito de compras 
        const itemsCart = this._cartItems.find((item) => item.id === cartItem.id);
        //valida si el item existe en el carrito de compras, si existe aumenta la cantidad
        if (itemsCart) {
            itemsCart.quantity += 1;
        } else {
            items.push(cartItem);
        }
        //actualiza el carrito de compras
        this._cartItems = [...items];
        //envia el carrito de compras actualizado
        this.shoppingCart.next({ ...items });
        console.log(this._cartItems);
        this.saveLocalStorage();
    }
    getTotal(items: ItemsCart[]) {
        //retorna el total de la suma de los precios de los items
        return items.map((item) => item.price * item.quantity).reduce((acc, item) => acc + item, 0);
    }
    removeCartItems(cartItem: ItemsCart) {
        //filtra los items que no coincidan con el id del item a eliminar
        const filterItems = this._cartItems.filter((item) => item.id !== cartItem.id);
        //actualiza el carrito de compras
        this.shoppingCart.next({ ...filterItems });
        console.log('item eliminado', filterItems)
        //retorna el carrito de compras actualizado
        return this._cartItems = [...filterItems];
    }
    removeAllCartItems(): void {
        this._cartItems = [];
        this.shoppingCart.next({ ...this._cartItems });
    }
    removeQuantity(item: ItemsCart): void {
        this._cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                cartItem.quantity--;
                if (cartItem.quantity === 0) {
                    this.removeCartItems(cartItem);
                }
            }
        })
    }
    //lOCAL STORAGE
    saveLocalStorage(): void {
        localStorage.setItem('cart', JSON.stringify(this._cartItems));
    }
    loadLocalStorage(): void {
        if (localStorage.getItem('cart')) {
            this._cartItems = JSON.parse(localStorage.getItem('cart')!);
        }
    }
}
