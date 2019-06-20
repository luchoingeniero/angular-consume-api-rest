import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
export class Service<GenericInterface> {
    private apiUrl = `${environment.apiUrl}/api`;
    private servicio = 'servicio_no_agreado';
    constructor(private htttp: HttpClient, private authService: AuthService) { }
     headers: HttpHeaders = new HttpHeaders({
       'Content-Type': 'application/json'
      });

    setService(servicio: string) {
    this.servicio = servicio;
    }
    private getUrlApi() {
    return `${this.apiUrl}/${this.servicio}`;
    }
     list(): Observable<any> {
        return this.htttp.get(`${this.getUrlApi()}/`,{headers:this.headers});
      }


}