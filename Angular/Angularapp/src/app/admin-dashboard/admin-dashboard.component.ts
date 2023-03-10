import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/authenticationService.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any;
  userId: any;
  constructor(private loginservice: LoginserviceService) {

  }
  sendDeleteUserId(id: any) {
    console.log(id);
    this.userId = id;
  }
  deleteUser() {
    this.loginservice.deleteUser(this.userId).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
  sendId(id: any) {
    this.userId = id;
  }
  updateUser() {
    this.loginservice.updateStatus(this.userId).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.loginservice.getalldata().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }


}
