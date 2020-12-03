import { ProfileService } from './../core/services/profile.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { Profile } from '../shared/models/profile.model';

@Injectable()
export class ProfileResolverService implements Resolve<Profile> {
  constructor(private ProfileService: ProfileService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.ProfileService.get(route.params['username']).pipe(
      catchError((err) => this.router.navigateByUrl('/'))
    );
  }
}
