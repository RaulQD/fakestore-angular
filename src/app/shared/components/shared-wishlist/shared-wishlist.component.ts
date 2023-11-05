import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-shared-wishlist',
  templateUrl: './shared-wishlist.component.html',
  styleUrls: ['./shared-wishlist.component.css']
})
export class SharedWishlistComponent implements OnInit, OnDestroy{
  showWishList!: boolean;
  subscription?: Subscription;
  showDropdown!: boolean;

  private sharedService = inject(SharedService);
  
  ngOnInit(): void {
    this.subscription = this.sharedService.getShowWishList().subscribe((value: boolean) => {
      this.showWishList = value;
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  toogleWishlist() {
    this.sharedService.setShowWishlist(false);
  }
  toogleDropDown() {
    this.showDropdown = !this.showDropdown
  }
  closeDropdown() {
    this.showDropdown = false;
  }
  
}
