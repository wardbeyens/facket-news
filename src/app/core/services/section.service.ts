import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Section } from 'src/app/shared/models/section.model';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  constructor(private apiService: ApiService) {}

  add(data: String): Observable<Section> {
    return this.apiService
      .post(`/sections`, { section: data })
      .pipe(map((data) => data.section));
  }

  getAll(): Observable<Section[]> {
    // return this.apiService.get(`/articles`).pipe(map((data) => data.sections));
    return this.apiService.get(`/sections`).pipe(map((data) => data.sections));
  }

  destroy(name: string) {
    return this.apiService.delete(`/sections/${name}`);
  }
  get(name: string) {
    return this.apiService
      .get(`/sections/${name}`)
      .pipe(map((data) => data.section));
  }
}
