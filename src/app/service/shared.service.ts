import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private showCartSources = new BehaviorSubject<boolean>(false);
    private showWishListSources = new BehaviorSubject<boolean>(false);

    //SHOW CART
    getShowCart() {
        return this.showCartSources.asObservable();
    }
    setShowCart(value: boolean) {
        this.showCartSources.next(value);
    }
    //SHOW WISHLIST
    getShowWishList() {
        return this.showWishListSources.asObservable();
    }
    setShowWishlist(value: boolean) {
        this.showWishListSources.next(value);
    }
}
