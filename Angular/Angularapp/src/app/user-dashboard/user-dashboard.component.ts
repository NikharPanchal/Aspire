import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/authenticationService.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
}
