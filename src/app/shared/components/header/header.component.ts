import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsCart } from 'src/app/interface/products.interface';
import { SharedService } from 'src/app/service/shared.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {

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

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }
    ngOnInit(): void {
        //OBTENER EL TOTAL DE ITEMS DEL CARRITO
        this.suscription = this.storeService.shoppingCart$.subscribe((items: ItemsCart[]) => {
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
