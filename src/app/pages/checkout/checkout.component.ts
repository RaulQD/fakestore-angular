import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  currentStep = 1;
  
  nextStep(isValid: boolean) {
    this.currentStep++;
  }
  
  previousStep() {
    if(this.currentStep > 1) {
      this.currentStep--;
    }
  }
  onSubmit() {
    if (this.currentStep === 2) {
      
    }
  }
}
