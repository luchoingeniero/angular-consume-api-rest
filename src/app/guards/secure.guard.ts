import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
 constructor(private authService: AuthService, private utilService: UtilService , private router: Router) {}
  canActivate() {
    if (this.authService.isLogin()){
      return true;
    } else {
      this.utilService.showMessage('Debes Iniciar Session!!');
      this.router.navigate(['']);
      return false;
    }
}
}
