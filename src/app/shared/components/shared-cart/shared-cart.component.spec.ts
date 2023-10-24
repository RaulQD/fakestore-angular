import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCartComponent } from './shared-cart.component';

describe('SharedCartComponent', () => {
    let component: SharedCartComponent;
    let fixture: ComponentFixture<SharedCartComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SharedCartComponent],
        });
        fixture = TestBed.createComponent(SharedCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
