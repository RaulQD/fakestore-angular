import { Component, DoCheck, OnDestroy, OnInit, inject } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { Subscription } from 'rxjs';
import {  StoreService } from '../../service/store.service';
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
    private storeService = inject(StoreService);

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.sharedService.getShowCart().subscribe((value: boolean) => {
            this.showCart = value;
            console.log(value);
        });
        this.getCartItems();
    }

    getCartItems() {
        this.storeService.shoppingCart$.subscribe((items: ItemsCart[]) => {
            this.cartItems = Object.values(items);
        });
    }
    removeCartItems(cartItems: ItemsCart) {
        this.storeService.removeCartItems(cartItems);

    }
    getTotal(items: ItemsCart[]): number {
        return this.storeService.getTotal(items);
    }

    onAddQuantity(item: ItemsCart) {
        this.storeService.addToCart(item);
    }
    onRemoveQuantity(item: ItemsCart) {
        this.storeService.removeQuantity(item);
    }

    toogleCart() {
        this.sharedService.setShowCart(false);
    }
}
