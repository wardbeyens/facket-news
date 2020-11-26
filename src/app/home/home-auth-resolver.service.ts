import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class HomeAuthResolverService implements Resolve<boolean> {
  constructor(private router: Router, private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
