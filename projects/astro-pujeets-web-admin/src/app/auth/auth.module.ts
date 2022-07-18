import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationModule } from 'projects/encoders-brandtech-shared-library/src/public-api';

@NgModule({
  declarations: [SignInComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, AuthenticationModule],
})
export class AuthModule {}
