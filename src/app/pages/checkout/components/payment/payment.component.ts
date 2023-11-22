import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
    currentStep = 1;
    @Output() previous: EventEmitter<void> = new EventEmitter<void>();

    private formBuilder = inject(FormBuilder);

    paymentForm: FormGroup = this.formBuilder.group({
        cardNumber: ['',[Validators.required]],
        cardName: ['',[Validators.required]],
        cardMonth: ['',[Validators.required]],
        cardYear: ['',[Validators.required]],
        cardCvv: ['',[Validators.required]],
    })
    
    onSubmit() {
        if(this.paymentForm.invalid) {
            this.paymentForm.markAllAsTouched();
            return;
        }
        console.log(this.paymentForm.value);  
    }
    previousStep() {
        this.previous.emit();
      }
}
