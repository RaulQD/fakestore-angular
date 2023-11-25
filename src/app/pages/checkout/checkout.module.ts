import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormComponent } from './components/form/form.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckoutFastComponent } from './components/checkoutFast/checkoutFast.component';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  declarations: [
    CheckoutComponent,
    FormComponent,
    PaymentComponent,
    OrderDetailsComponent,
    CheckoutFastComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PaymentComponent
  ]
})
export class CheckoutModule { }
