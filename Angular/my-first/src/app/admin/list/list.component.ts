import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
  }
  callMyApi() {
    this.userservice.getUserApi().subscribe(data => console.log(data));
  }

}
