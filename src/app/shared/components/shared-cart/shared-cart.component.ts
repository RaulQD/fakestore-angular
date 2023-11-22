import { Component, DoCheck, OnDestroy, OnInit, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import { ItemsCart } from 'src/app/interface/products.interface';
import { SharedService } from 'src/app/pages/service/shared.service';
import { StoreService } from 'src/app/pages/service/store.service';

@Component({
    selector: 'app-shared-cart',
    templateUrl: './shared-cart.component.html',
    styleUrls: ['./shared-cart.component.css'],
})
export class SharedCartComponent implements OnInit, OnDestroy {

    showCart!: boolean;
    subscription!: Subscription;
    cartItems: ItemsCart[] = [];
    totalItems: number = 0;
    emptyMessage: boolean = false;

    private sharedService = inject(SharedService);
    private storeService = inject(StoreService);

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.sharedService.getShowCart().subscribe((value: boolean) => {
            this.showCart = value;
        });
        this.getCartItems();
        this.getTotal();
    }

    getCartItems() {
        this.subscription = this.storeService.shoppingCart$.subscribe((items: ItemsCart[]) => {
            this.cartItems = Object.values(items);
        });
    }
    removeCartItems(cartItems: ItemsCart) {
        this.storeService.removeCartItems(cartItems);

    }
    getTotal() {
        this.subscription = this.storeService.shoppingCart$.subscribe((items: ItemsCart[]) => {
            this.totalItems = this.storeService.getTotal();
        });
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
