import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormComponent } from './components/form/form.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ProductsImagePipe } from '../products/pipes/products-image.pipe';


@NgModule({
  declarations: [
    CheckoutComponent,
    FormComponent,
    PaymentComponent,
    OrderDetailsComponent,
    ContactFormComponent,
    AddressFormComponent,

  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    PaymentComponent
  ]
})
export class CheckoutModule { }
