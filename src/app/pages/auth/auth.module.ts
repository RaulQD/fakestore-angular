import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
