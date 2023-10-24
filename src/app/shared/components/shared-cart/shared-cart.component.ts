import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shared-cart',
    templateUrl: './shared-cart.component.html',
    styleUrls: ['./shared-cart.component.css'],
})
export class SharedCartComponent implements OnInit, OnDestroy {
    showCart!: boolean;
    subscription!: Subscription;

    private sharedService = inject(SharedService);

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.sharedService.getShowCart().subscribe((value: boolean) => {
            this.showCart = value;
            console.log(value);
        });
    }
    toogleCart() {
        this.sharedService.setShowCart(false);
    }
}
