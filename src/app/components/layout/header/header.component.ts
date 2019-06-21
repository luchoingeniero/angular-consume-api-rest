import { Component, OnInit, OnChanges } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { UtilService } from '../../../services/util.service';
import { UserInterface } from '../../../model/userInterface';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: UserInterface = {username: '', role: ''};
  url: string;
  constructor(private authService: AuthService, private utilService: UtilService, private router: Router ) {
    this.url = router.url;
    if (authService.isLogin()) {
      this.user = authService.getUser();
    }
    authService.userSubject.subscribe((user) => {
     this.user = user;
   });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    console.log('init', this.router.url);
  }

  public logout() {
    this.authService.logut();
    this.router.navigate(['']);
    this.utilService.showMessage('Session Cerrada Correctamante');
}
}
