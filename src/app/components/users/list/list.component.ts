import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../services/users.service';
import { UserInterface } from '../../../model/userInterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.list().subscribe(
      data => { console.log(data); },
      error => { console.log(error); }
    );
  }

}
