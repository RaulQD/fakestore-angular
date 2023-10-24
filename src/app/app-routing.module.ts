import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'fakestore', pathMatch: 'full' },
    {
        path: 'fakestore',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '**',
        redirectTo: 'fakestore',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
