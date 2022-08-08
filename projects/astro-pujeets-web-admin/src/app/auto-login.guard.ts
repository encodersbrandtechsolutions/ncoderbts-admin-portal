import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad, CanActivate {
  constructor(
    private authService: AuthenticationService,
    public router: Router
  ) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        console.log('isAuthenticated', isAuthenticated);
        if (isAuthenticated) {
          // Directly open inside area
          this.router.navigateByUrl('/', { replaceUrl: true });
          return false;
        } else {
          // Simply allow access to the login
          return true;
        }
      })
    );
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        console.log('isAuthenticated', isAuthenticated);
        if (isAuthenticated) {
          // Directly open inside area
          this.router.navigateByUrl('/', { replaceUrl: true });
          return false;
        } else {
          // Simply allow access to the login
          return true;
        }
      })
    );
  }
}
