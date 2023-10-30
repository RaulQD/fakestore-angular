import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CardProdutsComponent } from './components/card-produts/card-produts.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [ProductsComponent, ListProductsComponent, CardProdutsComponent],
    imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
