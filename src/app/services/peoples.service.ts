import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {
  private url = environment.apiUrl;
  constructor() { }
}
