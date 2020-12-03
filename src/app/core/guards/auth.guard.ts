import { map, take } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
