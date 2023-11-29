import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemsCart } from 'src/app/interface/products.interface';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: 'root'
})
export class StoreService {

    private _cartItems: ItemsCart[] = [];

    private _shoppingCart = new BehaviorSubject<ItemsCart[]>([]);
    shoppingCart$ = this._shoppingCart.asObservable();
    constructor() {
        this.loadLocalStorage();
    }

    addToCart(cartItem: ItemsCart): void {
        //Crea una copia del carrito de compras para evitar modificar el original
        const items: ItemsCart[] = [...this._cartItems];
        //busca si el item ya existe en el carrito de compras 
        const itemsCart: ItemsCart | undefined = this._cartItems.find((item) => item.id === cartItem.id);
        //valida si el item existe en el carrito de compras, si existe aumenta la cantidad
        if (itemsCart) {
            itemsCart.quantity += 1;
        } else {
            items.push(cartItem);
        }
        //actualiza el carrito de compras
        this._cartItems = [...items];
        //envia el carrito de compras actualizado
        this._shoppingCart.next(items);
        console.log(this._cartItems);
        //message
        Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            width: '21.875rem',
            timer: 3000,
            timerProgressBar: true,
            customClass: {
                title: 'custom-popup-title-class',
                icon: 'custom-popup-icon-class',
            },
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }).fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
        });
        this.saveLocalStorage(items);
    }
    getTotal() {
        const items: ItemsCart[] = [...this._cartItems];
        //retorna el total de la suma de los precios de los items
        const total: number = items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
        return total;
    }
    removeCartItems(cartItem: ItemsCart) {
        //filtra los items que no coincidan con el id del item a eliminar
        const filterItems: ItemsCart[] = this._cartItems.filter((item) => item.id !== cartItem.id);
        //actualiza el carrito de compras
        this._shoppingCart.next({ ...filterItems });
        console.log('item eliminado', filterItems)
        //Eliminar un item del carrito de compras en el local storage
        this.saveLocalStorage(filterItems);

        //message
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
            icon: 'error',
            title: 'Producto eliminado del carrito'
        });

        return this._cartItems = [...filterItems];
    }
    removeAllCartItems(): void {
        //resetea el carrito de compras a un array vacio y que no vote undefined
        const items: ItemsCart[] = [...this._cartItems];
        //envia el carrito de compras actualizado
        this._shoppingCart.next(items);
        // Eliminar todos los items del carrito de compras en el local storage
        this.clearLocalStorage();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });

    }
    removeQuantity(item: ItemsCart): void {
        //itera sobre cada item del array _cartItems y comprueba si el id del item coincide con el id del parametro item
        this._cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                cartItem.quantity--;
                if (cartItem.quantity === 0) {
                    this.removeCartItems(cartItem);
                }
            }
        })
        //envia el carrito de compras actualizado
        this._shoppingCart.next({ ...this._cartItems });
        this.saveLocalStorage(this._cartItems);
        console.log('item eliminado', this._cartItems);
    }
    private clearLocalStorage(): void {
        localStorage.removeItem('cart');
    }
    //lOCAL STORAGE
    private saveLocalStorage(cartItem: ItemsCart[]): void {
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }
    private loadLocalStorage(): void {
        const storedItems: string | null = localStorage.getItem('cart');
        if (storedItems) {
            this._cartItems = JSON.parse(storedItems);
            this._shoppingCart.next({ ...this._cartItems });
        }
    }
}
