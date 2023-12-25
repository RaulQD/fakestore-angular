import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { navigationData } from 'src/app/interface/navigation';
import { Products } from 'src/app/interface/products.interface';
import { SharedService } from 'src/app/service/shared.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {

    navigationData = navigationData;
    scrolled: boolean = false;
    showDropDown: boolean = false;
    showMenu: boolean = false;
    totalItems: number = 0;
    suscription!: Subscription;
    dataSource: Products[] = [];
    private sharedService = inject(SharedService);
    private storeService = inject(StoreService);



    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (window.scrollY > 80) {
            this.scrolled = true;
        } else {
            this.scrolled = false;
        }
    }

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }
    ngOnInit(): void {
        //OBTENER EL TOTAL DE ITEMS DEL CARRITO
        this.suscription = this.storeService.shoppingCart$.subscribe((items: Products[]) => {
            this.totalItems = Object.values(items).length;
        });
    }
    //TOOGLE CART
    toggleCart() {
        this.sharedService.setShowCart(true);
    }
    // //TOOGLE WISH LIST
    // toogleWishList() {
    //     this.sharedService.setShowWishlist(true);
    // }
    //TOOGLE DROPDOWN
    toggleDropdown() {
        this.showDropDown = !this.showDropDown;
    }
    closeDropdown() {
        this.showDropDown = false;
    }
    //modal
    toggleModal() {
        //CERRAR EL MENU DESPLEGABLE
        this.showDropDown = false;
    }
    toogleMenu() {
        this.showMenu = !this.showMenu;
    }
    closeMenu() {
        this.showMenu = false;
    }
}
