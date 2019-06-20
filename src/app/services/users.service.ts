import { Injectable } from '@angular/core';
import { Service } from './service';
import { UserInterface } from '../model/userInterface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends Service<UserInterface> {
 constructor(htttp: HttpClient, authService: AuthService) {
   super(htttp, authService);
   this.setService('users');
 }
 list(): Observable<any> {
  return super.list();
}
}
