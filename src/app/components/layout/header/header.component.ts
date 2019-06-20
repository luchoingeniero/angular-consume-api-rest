import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { UtilService } from '../../../services/util.service';
import { UserInterface } from '../../../model/userInterface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: UserInterface = {username: '', role: ''};
  constructor(private authService: AuthService, private utilService: UtilService, private router: Router ) {
    if (authService.isLogin()) {
      this.user = authService.getUser();
    }
    authService.userSubject.subscribe((user) => {
     this.user = user;
   });
  }

  ngOnInit() {
  }

  public logout() {
    this.authService.logut();
    this.router.navigate(['']);
    this.utilService.showMessage('Session Cerrada Correctamante');
}
}
