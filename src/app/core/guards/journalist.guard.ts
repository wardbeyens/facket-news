import { map, take } from 'rxjs/operators';
import { UserService } from '../services/user.service';
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
export class JournalistGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>((obs) => {
      this.userService.currentUser.subscribe((user: User) => {
        if (user.role == 'Journalist' || user.role == 'Admin') {
          obs.next(true);
        } else {
          this.router.navigateByUrl('/auth/login');
          obs.next(false);
        }
      });
    });
  }
}
