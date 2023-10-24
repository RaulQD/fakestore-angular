import { Component, HostListener, inject } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { ModalService } from '../../service/modal.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    scrolled = false;
    showDropDown = false;
    private sharedService = inject(SharedService);
    private modalService = inject(ModalService);

    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (window.scrollY > 80) {
            this.scrolled = true;
        } else {
            this.scrolled = false;
        }
    }
    toogleCart() {
        this.sharedService.setShowCart(true);
    }
    toogleDropdown() {
        this.showDropDown = !this.showDropDown;
    }
    closeDropdown() {
        this.showDropDown = false;
    }
    toogleModal() {
        this.modalService.setShowModal(true);
        //CERRAR EL MENU DESPLEGABLE
        this.showDropDown = false;
    }
}
