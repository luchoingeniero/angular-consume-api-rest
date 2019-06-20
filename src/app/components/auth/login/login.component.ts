import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserInterface} from '../../../model/userInterface';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

import {AuthService} from '../../../services/auth.service';
import {UtilService} from '../../../services/util.service';


export class FormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNameFormControl = new FormControl('', [
      Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  user: UserInterface = { username: '' , password: '' };

  matcher = new FormErrorStateMatcher();

  constructor(private utilService: UtilService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLogin()) {
     this.router.navigate(['dashboard']);

    }
  }

  login() {
    console.log('Entre a Login');
    return this.authService
                    .login(this.user)
                    .subscribe(
                      data => {
                        if (data.error) {
                          this.utilService.showMessage(data.error);
                        } else {
                          const user = jwt_decode(data.token);
                          this.authService.setUser(user);
                          this.authService.setToken(data.token);
                          this.router.navigate(['dashboard']);
                          this.utilService.showMessage('Has Iniciado Correctamente');
                          }
                      },
                      error => {
                        this.utilService.showMessage('Ha ocurrido un error enviado los datos al server!');
                        console.log(error);
                       }
                    );
  }
}
