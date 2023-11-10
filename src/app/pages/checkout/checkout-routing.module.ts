import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCheckoutComponent } from './layout/layout-checkout.component';

const routes: Routes = [
    { 
        path: '',
        component: LayoutCheckoutComponent,
        children: [
            {
                path: 'information',
                loadChildren: () =>
                    import('./pages/checkout-info/checkout-info.module').then(
                        (m) => m.CheckoutInfoModule
                    ),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckoutRoutingModule { }
