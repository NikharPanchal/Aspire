import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/authenticationService.service';

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
  sessionData: any;
  constructor(loginservice: LoginserviceService) {
    this.isLogin();
  }
  isLogin() {
    this.ngOnInit();
    if (sessionStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.ngOnInit();
    sessionStorage.clear();
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') != null) {
      this.sessionData = JSON.parse(sessionStorage.getItem('user') || '');

      this.username = `Welcome ,${this.sessionData[0].fname} `
      if (this.sessionData[0].role == 'admin') {
        this.dashboard = 'User Data';
      }
      if (this.sessionData[0].role == 'user') {
        this.userdashboard = 'My Blog';
      }
    } else {
      this.username = '';
      this.dashboard = '';
      this.userdashboard = '';
    }
  }
}
