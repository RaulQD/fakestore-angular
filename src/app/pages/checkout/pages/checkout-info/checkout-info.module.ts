import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutInfoRoutingModule } from './checkout-info-routing.module';
import { CheckoutInfoComponent } from './checkout-info.component';


@NgModule({
  declarations: [
    CheckoutInfoComponent
  ],
  imports: [
    CommonModule,
    CheckoutInfoRoutingModule
  ]
})
export class CheckoutInfoModule { }
