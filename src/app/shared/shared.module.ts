import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedCartComponent } from './components/shared-cart/shared-cart.component';
import { ModalComponent } from './components/modal/modal.component';
import { SharedSearchComponent } from './components/shared-search/shared-search.component';
import { SharedWishlistComponent } from './components/shared-wishlist/shared-wishlist.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PaymentComponent } from '../pages/checkout/components/payment/payment.component';



@NgModule({
    declarations: [HeaderComponent, FooterComponent, SharedCartComponent, ModalComponent, SharedSearchComponent, SharedWishlistComponent, NotificationsComponent],
    imports: [CommonModule, HttpClientModule, RouterModule],
    exports: [HeaderComponent, FooterComponent, SharedSearchComponent, NotificationsComponent],
})
export class SharedModule { }
