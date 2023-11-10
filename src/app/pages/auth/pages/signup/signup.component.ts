import { Component, inject } from '@angular/core';
import { ModalService } from 'src/app/shared/service/modal.service';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CustomValidators from '../../../../shared/validators/validators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
    

    private modalServices = inject(ModalService);
    private authService = inject(AuthService);
    private formBuilder = inject(FormBuilder);

    form: FormGroup = this.formBuilder.group({
        email: ['',[Validators.required,Validators.pattern(CustomValidators.emailPattern)]],
        password: ['',],
        
        name: [''],
    });
    
    toogleModal() {
        this.modalServices.setShowModal(true);
    }
}
