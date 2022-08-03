import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'astro-pujeets-web-admin';

  constructor(router: Router) {
    const token = localStorage.getItem('token');
    if (!token) {
      router.navigateByUrl('/auth/sign-in');
    }
  }
}
