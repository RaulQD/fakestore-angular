import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsCart } from 'src/app/interface/products.interface';
import { ModalService } from 'src/app/pages/service/modal.service';

import { StoreService } from 'src/app/pages/service/store.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {


    public cartItems: ItemsCart[] = [];
    public shipping: number = 7.90;
    public subscription!: Subscription;
    public totalItems: number = 0;
    private storeService = inject(StoreService);
    private modalService = inject(ModalService);


    ngOnInit(): void {
        this.subscription = this.storeService.shoppingCart$.subscribe((item) => {
            this.cartItems = Object.values(item);
        })
        this.getTotal();
        this.getSubTotal();
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }
    getSubTotal() {
        this.subscription = this.storeService.shoppingCart$.subscribe(() => {
            this.totalItems = this.storeService.getTotal();
        });
    }
    getTotal() {
        return this.totalItems + this.shipping;
    }
    toggleModal() {
        this.modalService.toggleModal(true);
    }
}
