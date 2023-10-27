import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
    showModal = false;
    subscription!: Subscription;
    private modalService = inject(ModalService);

    ngOnInit(): void {
        this.subscription = this.modalService.getShowModal().subscribe((value) => {
            this.showModal = value;
            console.log(value);
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    closeModal() {
        this.modalService.setShowModal(false);
        
    }
}
