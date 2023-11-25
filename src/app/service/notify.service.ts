import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private successMessage = new BehaviorSubject<string>('');
  successMessage$ = this.successMessage.asObservable();

  private deleteMessage = new BehaviorSubject<string>('');
  deleteMessage$ = this.deleteMessage.asObservable();

  setSuccessMessage(message: string): void {
    this.successMessage.next(message);
  }
  setDeleteMessage(message: string): void{
    this.deleteMessage.next(message);
  }
}
