import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Contact } from 'src/app/interface/user.interface';
import * as  customValidators from 'src/app/shared/validators/validators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    currentStep = 1;

    user!: Contact;

    private formBuilder = inject(FormBuilder)


    checkoutForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
        phone: ['', [Validators.required, Validators.pattern(customValidators.telefonoPattern)]],
        firtsName: ['', [Validators.required, Validators.pattern(customValidators.stringPattern)]],
        lastName: ['', [Validators.required, Validators.pattern(customValidators.stringPattern)]],
        address: ['', [Validators.required, Validators.minLength(10)]],
        city: ['', [Validators.required]],
        district: ['', [Validators.required]],
        region: ['', [Validators.required]],
        reference: ['', [Validators.required]],
    })
    paymentForm: FormGroup = this.formBuilder.group({
        cardNumber: ['', [Validators.required]],
        cardName: ['', [Validators.required]],
        cardMonth: ['', [Validators.required]],
        cardYear: ['', [Validators.required]],
        cardCvv: ['', [Validators.required]],
    })

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
                    return 'El valor ingresado no es válido.';
            }
        }
        return null;
    }


    next() {
        if (this.currentStep === 1) {
            if(this.checkoutForm.invalid) {
                this.checkoutForm.markAllAsTouched();
                return;
            }
            this.currentStep++;
       }
    }
    onSubmit() {
        if(this.paymentForm.invalid) {
            this.paymentForm.markAllAsTouched();
            return;
        }
    }

}
