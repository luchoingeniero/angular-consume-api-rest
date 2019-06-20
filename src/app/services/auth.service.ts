import { Injectable } from '@angular/core';

import { UserInterface } from '../model/userInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private   url = environment.apiUrl;
  constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  login( user: UserInterface ): Observable<any> {
     return this.htttp
      .post<UserInterface>(
        `${this.url}/auth/login`,
         {user},
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  logut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  setToken(token: any) {
    sessionStorage.setItem('token', token);
  }
  getToken() {
    return sessionStorage.getItem('token');
  }

  setUser(user: UserInterface) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  isLogin() {
    return (this.getToken()) ? true : false;
  }

}
