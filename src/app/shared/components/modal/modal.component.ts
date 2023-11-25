import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  public subscription!: Subscription
  public showModal: boolean = false;
  private modalService = inject(ModalService);
  ngOnInit(): void {
    this.subscription = this.modalService.modalSources$.subscribe((value) => {
      this.showModal = value;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  closeModal() {
    this.modalService.toggleModal(false);
  }
}
