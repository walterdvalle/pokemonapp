import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  doLogin() {
    localStorage.setItem('token', 'wvl230982348');
  }

  doLogout() {
    localStorage.clear();
  }

  isLoggedIn():boolean {
    return localStorage.getItem('token') != null;
  }
}
