import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Profile } from 'src/app/shared/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private ApiService: ApiService) {}

  all(): Observable<{ profiles: Profile[]; profilesCount: number }> {
    return this.ApiService.get('/profiles');
  }

  get(username: string): Observable<Profile> {
    return this.ApiService.get('/profiles/' + username).pipe(
      map((data: { profile: Profile }) => data.profile)
    );
  }

  follow(userName: string): Observable<Profile> {
    return this.ApiService.post('/profiles/' + userName + '/follow');
  }

  unfollow(userName: string): Observable<Profile> {
    return this.ApiService.delete('/profiles/' + userName + '/follow');
  }

  delete(userName: string): Observable<Profile> {
    return this.ApiService.delete('/profiles/' + userName);
  }
}
