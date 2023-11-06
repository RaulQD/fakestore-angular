import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedCartComponent } from './components/shared-cart/shared-cart.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginModule } from '../pages/auth/pages/login/login.module';
import { SharedSearchComponent } from './components/shared-search/shared-search.component';
import { SharedWishlistComponent } from './components/shared-wishlist/shared-wishlist.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent, SharedCartComponent, ModalComponent, SharedSearchComponent, SharedWishlistComponent],
    imports: [CommonModule, HttpClientModule, RouterModule, LoginModule],
    exports: [HeaderComponent, FooterComponent, SharedSearchComponent],
})
export class SharedModule { }
