import { Component, DoCheck, OnDestroy, OnInit, inject } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { ItemsCart } from 'src/app/pages/products/interface/products.interface';

@Component({
    selector: 'app-shared-cart',
    templateUrl: './shared-cart.component.html',
    styleUrls: ['./shared-cart.component.css'],
})
export class SharedCartComponent implements OnInit, OnDestroy {

    showCart!: boolean;
    subscription!: Subscription;
    cartItems: ItemsCart[] = [];
    private sharedService = inject(SharedService);
    private cartService = inject(CartService);

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.sharedService.getShowCart().subscribe((value: boolean) => {
            this.showCart = value;
            console.log(value);
        });
        this.getCartItems();
        this.cartService.loadLocalStorage();
    }

    getCartItems() {
        this.cartService.getProductsInCart().subscribe((items) => {
            this.cartItems = Object.values(items);
        })
    }
    removeCartItems(cartItems: ItemsCart) {
        this.cartService.removeCartItems(cartItems);

    }
    getTotal(items: ItemsCart[]): number {
        return this.cartService.getTotal(items);
    }

    onAddQuantity(item: ItemsCart) {
        this.cartService.addToCart(item);
    }
    onRemoveQuantity(item: ItemsCart) {
        this.cartService.removeQuantity(item);
    }

    toogleCart() {
        this.sharedService.setShowCart(false);
    }
}
