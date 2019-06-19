import { Injectable } from '@angular/core';

import { UserInterface } from '../model/userInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private   url = 'http://localhost:3000';
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

}
