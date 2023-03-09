import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/loginservice.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users: any;
  userId: any;
  constructor(private loginservice: LoginserviceService) {

  }
  deleteUser(id: any) {
    console.log(id);
    this.loginservice.deleteUser(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
  sendId(id: any) {
    this.userId = id;
  }
  updateUser() {
    this.loginservice.updateStatus(this.userId).subscribe();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.loginservice.getalldata().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
