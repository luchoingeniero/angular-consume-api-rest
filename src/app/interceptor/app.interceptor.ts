import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {

    }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("Interceptando!!", (req.url.match('login$'))?true:false);
    //req = req.clone({headers: req.headers.set('Authorization', this.authService.getToken())});
    //if (!req.url.match('login$')) {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        Accept         : 'application/json',
        Authorization  : `Bearer ${this.authService.getToken()}`,
      },
    });
    //}

    return next.handle(req);
  }
}