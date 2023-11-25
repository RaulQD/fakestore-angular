import { ElementRef, Injectable, Renderer2, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private showCartSources = new BehaviorSubject<boolean>(false);
    private showWishListSources = new BehaviorSubject<boolean>(false);

    getShowCart() {
        return this.showCartSources.asObservable();
    }
    setShowCart(value: boolean) {
        this.showCartSources.next(value);
    }
    getShowWishList() { 
        return this.showWishListSources.asObservable();
    }
    setShowWishlist(value: boolean) {
        this.showWishListSources.next(value);
    }
}
