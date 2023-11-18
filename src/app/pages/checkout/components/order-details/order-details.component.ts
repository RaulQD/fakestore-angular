import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsCart } from 'src/app/pages/products/interface/products.interface';
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
    public total: number = 0;

    private storeService = inject(StoreService);

    ngOnInit(): void {
        this.subscription = this.storeService.shoppingCart$.subscribe((item) => {
            this.cartItems = Object.values(item);
            console.log(Object.values(item))
        })
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    truncateString(str: string, num: number) {
        if (!str) return '';
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }
    getSubTotal(items: ItemsCart[]): number {
        console.log(this.storeService.getTotal(items));
        return this.storeService.getTotal(items);
    }
    getTotal(items: ItemsCart[]): number {
        return this.getSubTotal(items) + this.shipping;
    }

}
