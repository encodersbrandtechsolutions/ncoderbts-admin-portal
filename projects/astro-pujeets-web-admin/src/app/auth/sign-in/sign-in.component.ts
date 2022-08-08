import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ILoginForm } from 'projects/encoders-brandtech-shared-library/src/public-api';
import { Subscription } from 'rxjs';
import {
  AdminSignInInput,
  MutationAdminSignInArgs,
} from '../../interfaces/admin';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  redirectToForgotPassword() {
    // this.router.navigateByUrl('/auth/forgot-password');
  }

  signIn(formValue: ILoginForm) {
    const input: AdminSignInInput = {
      username: formValue.username,
      password: formValue.password,
    };
    const subscription = this.authService.authenticate(input).subscribe(
      ({ data, errors }) => {
        if (data?.adminSignIn) {
          this.messageService.add({
            severity: 'success',
            summary: '',
            detail: 'Logged In!',
          });
          this.authService.setToken(data?.adminSignIn.accessToken);
          this.router.navigateByUrl('/');
        }
      },
      (errors) =>
        this.messageService.add({
          severity: 'error',
          detail: errors?.message,
        })
    );
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
