import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ItemsCart } from 'src/app/interface/products.interface';
import { SharedService } from 'src/app/service/shared.service';
import { StoreService } from 'src/app/service/store.service';
import Swal from 'sweetalert2';

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
    cartEmpty: boolean = false;
    isLoadingCheckout: boolean = false;
    messageCheckout = 'Cargando formulario de pago'

    private sharedService = inject(SharedService);
    private storeService = inject(StoreService);
    private router = inject(Router);

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
        this.subscription = this.storeService.shoppingCart$.subscribe((items) => {
            this.cartItems = Object.values(items);
        });
    }
    removeCartItems(cartItems: ItemsCart) {
        this.storeService.removeCartItems(cartItems);

    }
    removeAllCartItems() {
        // this.storeService.removeAllCartItems();
        console.log(this.storeService.removeAllCartItems())
    }
    getTotal() {
        this.subscription = this.storeService.shoppingCart$.subscribe(() => {
            this.totalItems = this.storeService.getTotal();
        });
    }

    onAddQuantity(item: ItemsCart) {
        if (item.quantity < 10) {
            this.storeService.addToCart(item);
        } else {
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
                icon: 'warning',
                title: 'Solo puedes llevar 10 productos'

            });
        }
    }
    onRemoveQuantity(item: ItemsCart) {
        this.storeService.removeQuantity(item);
    }

    toogleCart() {
        this.sharedService.setShowCart(false);
    }
    redirecToCheckout() {
        this.isLoadingCheckout = true;
        setTimeout(() => {
            this.isLoadingCheckout = false;
            this.router.navigate(['/fakestore/checkout']);
        }, 3000);
        console.log('redirecToCheckout checkout')
    }
}
