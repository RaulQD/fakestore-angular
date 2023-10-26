import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutsComponent } from './card-produts.component';

describe('CardProdutsComponent', () => {
  let component: CardProdutsComponent;
  let fixture: ComponentFixture<CardProdutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProdutsComponent]
    });
    fixture = TestBed.createComponent(CardProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
