import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'products/:id', pathMatch: 'full' },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: '**', redirectTo: 'products/:id' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsDetailsRoutingModule { }
