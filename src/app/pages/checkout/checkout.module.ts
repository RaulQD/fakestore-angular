import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCheckoutComponent } from './layout/layout-checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutRoutingModule } from './checkout-routing.module';




@NgModule({
  declarations: [
    LayoutCheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
  ]
})
export class CheckoutModule { }
