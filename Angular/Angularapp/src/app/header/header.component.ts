import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  link = '';
  constructor(loginservice: LoginserviceService) {
    this.isLogin();
  }
  isLogin() {
    if (sessionStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.clear();
  }
  ngOnInit(): void {
  }

}
