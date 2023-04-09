import { Component, OnInit } from '@angular/core';

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

  constructor() {
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

  logout() {
    this.ngOnInit();
    sessionStorage.clear();
  }

}
