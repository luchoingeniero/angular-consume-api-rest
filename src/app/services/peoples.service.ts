import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Service } from './service';
import { PeopleInterface } from '../model/peopleInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService extends Service<PeopleInterface>  {
  constructor(htttp: HttpClient, authService: AuthService) {
    super(htttp, authService);
    this.setService('peoples');
  }
  list(): Observable<any> {
   return super.list();
 }
}
