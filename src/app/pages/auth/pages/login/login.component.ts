import { Component, inject } from '@angular/core';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    showModal = false;

    private modalService = inject(ModalService);

    closeModal() {
        this.modalService.setShowModal(false);
    }
}
