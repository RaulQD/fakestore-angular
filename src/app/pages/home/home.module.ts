import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
    declarations: [
        HomeComponent,
        BestProductsComponent,
        CategoryComponent,
        ProductsCardComponent,
        FeaturedComponent,
        ContentComponent,
    ],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
