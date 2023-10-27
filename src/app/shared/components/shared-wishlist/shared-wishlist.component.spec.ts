import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWishlistComponent } from './shared-wishlist.component';

describe('SharedWishlistComponent', () => {
  let component: SharedWishlistComponent;
  let fixture: ComponentFixture<SharedWishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedWishlistComponent]
    });
    fixture = TestBed.createComponent(SharedWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
