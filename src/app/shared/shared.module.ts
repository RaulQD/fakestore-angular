import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedCartComponent } from './components/shared-cart/shared-cart.component';

import { SharedSearchComponent } from './components/shared-search/shared-search.component';
import { SharedWishlistComponent } from './components/shared-wishlist/shared-wishlist.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

import { CheckoutModule } from '../pages/checkout/checkout.module';
import { ModalComponent } from './components/modal/modal.component';
import { SpinnerComponent } from './components/loadingSpinner/loading-spinner.component';






@NgModule({
    declarations: [HeaderComponent, FooterComponent, SharedCartComponent, SharedSearchComponent, SharedWishlistComponent, NotificationsComponent, ModalComponent, SpinnerComponent],
    imports: [CommonModule, HttpClientModule, RouterModule],
    exports: [HeaderComponent, FooterComponent, SharedSearchComponent, NotificationsComponent, ModalComponent, SpinnerComponent],
})
export class SharedModule { }
