import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/authenticationService.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  username = '';
  token: any;
  role = '';
  dashboard = '';
  blog: any;
  constructor(private jwtHelper: JwtHelperService,
    private service: LoginserviceServiceServer) { }
  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');

      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.username = decodedToken.sub;
      this.role = decodedToken.role;
      console.log(this.username);

      this.service.getBlogbyUserName(this.username).subscribe((data) => {
        console.log(data);
        this.blog = data;
      })

      // if (this.role == 'admin') {
      //   this.dashboard = 'User Data';
      //   this.BlogList = "Blog List";
      // }
      // if (this.role == 'user') {
      //   this.userdashboard = 'My Blog';
      // }

    }
  }
}
