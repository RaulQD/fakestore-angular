import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NotifyService } from '../../service/notify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  showSuccess = false;
  showError= false; 
  subscription!: Subscription;
  successMessage: string = '';
  deleteMessage: string = '';

  private notifyService = inject(NotifyService);

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getSuccessMessage();
   
    this.getDeleteMessage();
  }

  getSuccessMessage() { 
    this.showSuccess = false;
    this.subscription = this.notifyService.successMessage$.subscribe((message: string) => {
      this.successMessage = message;
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    });
  }
  getDeleteMessage() {
    this.showError = false;
    this.subscription = this.notifyService.deleteMessage$.subscribe((message: string) => {
      this.deleteMessage = message;
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    });
  }
}
