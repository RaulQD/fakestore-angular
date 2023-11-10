import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutInfoComponent } from './checkout-info.component';

const routes: Routes = [
  { path: '', component: CheckoutInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutInfoRoutingModule { }
