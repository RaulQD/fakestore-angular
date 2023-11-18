import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer,{skipSelf:true, host:true})
    }
  ]
})
export class ContactFormComponent {
  @Input() groupName = '';
  @Input() titleName = '';
  @Input() parentForm!: FormGroup;
}
