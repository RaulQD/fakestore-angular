import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private showCartSources = new BehaviorSubject<boolean>(false);

    getShowCart() {
        return this.showCartSources.asObservable();
    }
    setShowCart(value: boolean) {
        this.showCartSources.next(value);
    }
}
