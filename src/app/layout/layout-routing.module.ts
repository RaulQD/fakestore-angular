import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('../pages/home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'products',
                loadChildren: () =>
                    import('../pages/products/products.module').then((m) => m.ProductsModule),
            },
            {
                path: 'about',
                loadChildren: () =>
                    import('../pages/about/about.module').then((m) => m.AboutModule),
            },
            {
                path: 'myaccount/registration',
                loadChildren: () =>
                    import('../pages/auth/pages/signup/signup.module').then((m) => m.SignupModule),
            },
            {
                path: 'details',
                loadChildren: () =>
                    import('../pages/products-details/products-details.module').then(
                        (m) => m.ProductsDetailsModule
                    ),
            },
            {
                path: 'checkout/information',
                loadChildren: () =>
                    import('../pages/checkout/pages/checkout-info/checkout-info.module').then(
                        (m) => m.CheckoutInfoModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
