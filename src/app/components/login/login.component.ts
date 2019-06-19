import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthService} from '../../services/auth.service';
import {UserInterface} from '../../model/userInterface';
import * as jwt_decode from 'jwt-decode';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit() {
    if (sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      console.log(user);

    }
  }

  login() {
    console.log('Entre a Login');
    return this.authService
                    .login(this.user)
                    .subscribe(
                      data => {
                        if (data.error) {
                          this.snackBar.open(data.error, '', {
                            duration: 3000
                          });
                        } else {
                          const user = jwt_decode(data.token);
                          sessionStorage.setItem('user', JSON.stringify(user));
                          }
                      },
                      error => {
                        console.log(error);
                       }
                    );
  }
}
