import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogonComponent } from './logon.component';
import { AuthFormModule } from '../auth-form/auth-form.module';

@NgModule({
  imports: [
    CommonModule,
    AuthFormModule
  ],
  declarations: [LogonComponent]
})
export class LogonModule { }
