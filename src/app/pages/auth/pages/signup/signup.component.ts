import { Component, inject } from '@angular/core';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
    
    private modalServices = inject(ModalService);


    toogleModal() {
        this.modalServices.setShowModal(true);
    }
}
