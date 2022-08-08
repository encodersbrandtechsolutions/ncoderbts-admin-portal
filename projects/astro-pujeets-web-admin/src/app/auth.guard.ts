import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        console.log('isAuthenticated', isAuthenticated);
        return true;
        // if (isAuthenticated) {
        //   return true;
        // } else {
        //   this.router.navigateByUrl('/auth', { replaceUrl: true });
        //   return true;
        // }
      })
    );
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigateByUrl('/auth', { replaceUrl: true });
          return true;
        }
      })
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigateByUrl('/auth', { replaceUrl: true });
          return true;
        }
      })
    );
  }
}
