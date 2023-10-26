import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CardProdutsComponent } from './components/card-produts/card-produts.component';

@NgModule({
    declarations: [ProductsComponent, ListProductsComponent, CardProdutsComponent],
    imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
