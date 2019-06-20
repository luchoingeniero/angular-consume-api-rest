import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UtilService } from '../../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private utilService: UtilService, private router: Router) { }

  ngOnInit() {
    this.authService.logut();
    this.router.navigate(['']);
    this.utilService.showMessage('Session Cerrada Correctamante');
  }

}
