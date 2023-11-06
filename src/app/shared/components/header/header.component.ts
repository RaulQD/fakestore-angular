import { Component, DoCheck, HostListener, inject } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { ModalService } from '../../service/modal.service';
import { CartService } from '../../service/cart.service';
import { ItemsCart } from 'src/app/pages/products/interface/products.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements DoCheck {

    scrolled = false;
    showDropDown = false;
    totalItems: number = 0;
    dataSource: ItemsCart[] = [];
    private sharedService = inject(SharedService);
    private modalService = inject(ModalService);
    private cartService = inject(CartService);


    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (window.scrollY > 80) {
            this.scrolled = true;
        } else {
            this.scrolled = false;
        }
    }
    ngDoCheck(): void {
        this.totalItemsCart();
    }
    totalItemsCart() {
        this.cartService.getProductsInCart().subscribe((items: ItemsCart[]) => {
            this.totalItems = Object.values(items).length;
        });
    }
    //TOOGLE CART
    toogleCart() {
        this.sharedService.setShowCart(true);
    }
    //TOOGLE WISHLIST
    toogleWishlist() {
        this.sharedService.setShowWishlist(true);
        console.log('toogleWishlist');
    }
    //TOOGLE DROPDOWN
    toogleDropdown() {
        this.showDropDown = !this.showDropDown;
    }
    closeDropdown() {
        this.showDropDown = false;
    }
    //modal
    toogleModal() {
        this.modalService.setShowModal(true);
        //CERRAR EL MENU DESPLEGABLE
        this.showDropDown = false;
    }
}
