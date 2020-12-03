import { SectionService } from './../core/services/section.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { Section } from '../shared/models/section.model';

@Injectable()
export class SectionResolverService implements Resolve<Section> {
  constructor(
    private SectionService: SectionService,

    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.SectionService.get(route.params['name']).pipe(
      catchError((err) => this.router.navigateByUrl('/'))
    );
  }
}
