import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  link = '';
  username = '';
  dashboard = '';
  userdashboard = '';
  BlogList = '';
  sessionData: any;
  role: any;
  token: any;

  constructor(private jwtHelper: JwtHelperService) {
    this.isLogin();
  }

  isLogin() {
    this.ngOnInit();
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {

    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');

      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.username = decodedToken.sub;
      this.role = decodedToken.role;
      this.username = `Welcome ,${this.username} `
      if (this.role == 'admin') {
        this.dashboard = 'User Data';
        this.BlogList = "Blog List";
      }
      if (this.role == 'user') {
        this.userdashboard = 'My Blog';
      }
    } else {
      this.username = '';
      this.dashboard = '';
      this.userdashboard = '';
      this.BlogList = '';
    }
  }
  logout() {
    localStorage.clear();
    this.ngOnInit();
  }

}
