import { UserService } from 'src/app/core/services/user.service';
import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>((obs) => {
      this.userService.currentUser.subscribe((user: User) => {
        if (user.role == 'Admin') {
          obs.next(true);
        } else {
          this.router.navigateByUrl('/auth/login');
          obs.next(false);
        }
      });
    });
  }
}
