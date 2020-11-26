import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  getToken(): String {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
  }
}
