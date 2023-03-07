import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/loginservice.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users: any;
  constructor(private loginservice: LoginserviceService) {

  }
  ngOnInit(): void {
    this.loginservice.getalldata().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
