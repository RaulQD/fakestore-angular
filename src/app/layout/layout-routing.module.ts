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
                path: 'details',
                loadChildren: () =>
                    import('../pages/products-details/products-details.module').then(
                        (m) => m.ProductsDetailsModule
                    ),
            },
            {
                path: 'myaccount',
                loadChildren: () =>
                    import('../pages/myaccount/myaccount.module').then((m) => m.MyaccountModule),
            },
            {
                path: 'checkout',
                loadChildren: () =>
                    import('../pages/checkout/checkout.module').then(
                        (m) => m.CheckoutModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
