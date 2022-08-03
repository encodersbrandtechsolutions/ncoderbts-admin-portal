import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginForm } from 'projects/encoders-brandtech-shared-library/src/public-api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToForgotPassword() {
   // this.router.navigateByUrl('/auth/forgot-password');
  }

  signIn(event: ILoginForm) {
    console.log(event);
  }
}
