import { Component, inject } from '@angular/core';
import { ModalService } from 'src/app/shared/service/modal.service';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CustomValidators from '../../../../shared/validators/validators'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    showModal = false;

    private modalService = inject(ModalService);
    private loginService = inject(LoginService);
    private formBuilder = inject(FormBuilder);
    private router = inject(Router);

    public form: FormGroup = this.formBuilder.group({
        email: ['raulquispe@gmail.com', [Validators.required, Validators.email]],
        password: ['12345678', [Validators.required, Validators.minLength(6)]],
    })

    login() {
        this.loginService.login(this.form.value).subscribe({
            next: () => console.log('Login correcto'),
            error: () => {
                Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    width: '21.875rem',
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        title: 'custom-popup-title-class',
                        icon: 'custom-popup-icon-class',
                    }
                }).fire({
                    icon: 'error',
                    title: 'Credenciales incorrectas'
                });
            },
            complete: () => {
                this.router.navigateByUrl('/fakestore/products');
                this.modalService.setShowModal(false);
            }
        })
    }

    closeModal() {
        this.modalService.setShowModal(false);
    }
}
