import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalSources = new BehaviorSubject<boolean>(false);
  modalSources$ = this.modalSources.asObservable();
  constructor() { }

  toggleModal(value:boolean) {
    this.modalSources.next(value);
  }

}
