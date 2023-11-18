import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Contact } from 'src/app/pages/products/interface/user.interface';
import * as  customValidators from 'src/app/shared/validators/validators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {

    user!: Contact;

    private formBuilder = inject(FormBuilder)

    checkoutForm: FormGroup = this.formBuilder.group({
        contactInfo: this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
            phone: ['', [Validators.required]],
        }),
        addressInfo: this.formBuilder.group({
            firtsName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            address: ['',[Validators.required]],
            city: ['', [Validators.required]],
            district: ['', [Validators.required]],
            region: ['', [Validators.required]],
            reference: ['',[Validators.required]],
        }),
        // dataCard: this.formBuilder.group({
        //     cardNumber: ['', [Validators.required, customValidators.cardNumber]],
        //     cardName: ['', Validators.required],
        //     month: ['', Validators.required],
        //     year: ['', Validators.required],
        //     cvv: ['', Validators.required],
        // })
    })
    isValid(field: string) {
        return this.checkoutForm.controls[field].errors && this.checkoutForm.controls[field].touched;
    }

    getFieldError(field: string): string | null {
        if (!this.checkoutForm.controls[field]) return null;
        const errors: ValidationErrors = this.checkoutForm.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
          switch (key) {
            case 'required':
              return 'Este valor es requerido.';
            case 'pattern':
              return 'El valor ingresado no es válido.';
          }
        }
        return null;
      }
    onSubmit() {
       if(this.checkoutForm.invalid){
           this.checkoutForm.markAllAsTouched();
           return;
       }
        console.log(this.checkoutForm.value);
    }
}
