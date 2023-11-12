import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private showMdalSources = new BehaviorSubject<boolean>(false);

    getShowModal() {
        return this.showMdalSources.asObservable();
    }
    setShowModal(value: boolean) {
        this.showMdalSources.next(value);
    }
}
