import { Component, OnInit } from '@angular/core';

import { PeoplesService } from '../../../services/peoples.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  peoples: any;
  displayedColumns: string[] = ['id', 'identification', 'names', 'lastnames', 'acciones'];
  constructor(private peopleService: PeoplesService ) { }

  ngOnInit() {
    this.peopleService.list().subscribe(
      data => { this.peoples = data; console.log(data); },
      error => { console.log(error); }
    );
  }

}
