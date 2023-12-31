import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interface/user.interface';
import * as  customValidators from 'src/app/shared/validators/custom-validators';
import { CustomValidators } from '../../../../shared/validators/custom-validators';
import { StoreService } from 'src/app/service/store.service';
import { DateService } from 'src/app/service/date.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    public currentStep = 1;
    public year: number[] = [];
    public isloadingPayment: boolean = false;
    public messagePayment: string = 'Procesando pago...';

    private formBuilder = inject(FormBuilder)
    private dateService = inject(DateService);
    private storeService = inject(StoreService);
    private router = inject(Router);

    checkoutForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
        phone: ['', [Validators.required, CustomValidators.phoneNumbers]],
        firstName: ['', [Validators.required, CustomValidators.onlyLetters]],
        lastName: ['', [Validators.required, CustomValidators.onlyLetters]],
        address: ['', [Validators.required, Validators.minLength(10)]],
        city: ['', [Validators.required]],
        district: ['', [Validators.required]],
        region: ['', [Validators.required]],
        reference: ['', [Validators.required, Validators.minLength(20)]],
    })
    paymentForm: FormGroup = this.formBuilder.group({
        cardNumber: ['', [Validators.required, CustomValidators.onlyNumbers, Validators.maxLength(16), Validators.minLength(16)]],
        cardName: ['', [Validators.required]],
        cardMonth: ['', [Validators.required]],
        cardYear: ['', [Validators.required]],
        cardCvv: ['', [Validators.required, CustomValidators.cvv, CustomValidators.onlyNumbers, Validators.maxLength(4), Validators.minLength(3)]],
    })

    ngOnInit(): void {
        this.year = this.dateService.getYears();
    }
    get month(): string[] {
        return this.dateService.month;
    }
    isValid(field: string) {
        return this.checkoutForm.controls[field]?.touched && this.checkoutForm.controls[field].errors;
    }

    getFieldError(field: string): string | null {
        if (!this.checkoutForm.controls[field]) return null;
        const errors: ValidationErrors = this.checkoutForm.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido.';
                case 'minlength':
                    return `Debe tener Minimo ${errors['minlength']['requiredLength']} caracteres.`;
                case 'pattern':
                    return 'El correo debe ser example@example.com';
                case 'phoneNumbers':
                    return `El número debe comenzar con 9 y tener ${errors['phoneNumbers']} digitos`;
                case 'onlyLetters':
                    return `Ingresa 1 letra mayúscula y no debe tener números.`;
                case 'date':
                    return `Ingresa una fecha.`;
            }
        }
        return null;
    }

    isValidPayment(field: string) {
        return this.paymentForm.controls[field]?.touched && this.paymentForm.controls[field].errors;
    }
    getFieldErrorPayment(field: string): string | null {
        if (!this.paymentForm.controls[field]) return null;
        const errors: ValidationErrors = this.paymentForm.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido.';
                case 'onlyNumbers':
                    return `Solo se permiten números.`;
                case 'minlength':
                    return `Debe tener Minimo ${errors['minlength']['requiredLength']} caracteres.`;
                case 'maxlength':
                    return `Debe tener Maximo ${errors['maxlength']['requiredLength']} caracteres.`;
            }
        }
        return null;
    }
    next() {
        if (this.currentStep === 1) {
            if (this.checkoutForm.invalid) {
                this.checkoutForm.markAllAsTouched();
                return;
            }
            this.currentStep++;
        }
    }
    previus() {
        this.currentStep--;
    }

    onSubmit() {
        if (this.paymentForm.invalid) {
            this.paymentForm.markAllAsTouched();
            return;
        }
        this.isloadingPayment = true;
        setTimeout(() => {
            this.isloadingPayment = false;
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada con éxito',
                text: 'Gracias por su compra',
                customClass: {
                    title: 'title-class',
                    icon: 'custom-popup-icon-class',

                },
                confirmButtonText: 'Aceptar',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.checkoutForm.reset();
                    this.paymentForm.reset();
                    this.storeService.removeAllCartItems();
                    this.router.navigate(['/fakestore/products']);
                }
            });
        }, 2000);

    }

}
