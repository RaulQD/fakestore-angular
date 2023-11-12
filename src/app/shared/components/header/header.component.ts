import { Component, DoCheck, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsCart } from 'src/app/pages/products/interface/products.interface';
import { SharedService } from 'src/app/pages/service/shared.service';
import { StoreService } from 'src/app/pages/service/store.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements DoCheck {
   
    scrolled = false;
    showDropDown = false;
    totalItems: number = 0;
    suscription!: Subscription;
    dataSource: ItemsCart[] = [];
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


    ngDoCheck(): void {
        this.totalItemsCart();
    }
    totalItemsCart() {
        this.storeService.shoppingCart$.subscribe((items: ItemsCart[]) => {
            this.totalItems = Object.values(items).length;
        });
    }
  
    //TOOGLE CART
    toogleCart() {
        this.sharedService.setShowCart(true);
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
        //CERRAR EL MENU DESPLEGABLE
        this.showDropDown = false;
    }
}
