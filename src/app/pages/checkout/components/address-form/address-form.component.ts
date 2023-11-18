import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf:true, host: true})
    }
  ]
})
export class AddressFormComponent {
  @Input() groupName = '';
  @Input() titleName = '';
  @Input() parentForm!: FormGroup;

  get addressForm(): FormGroup { 
    return this.parentForm.get('addressInfo') as FormGroup;
  }
}
