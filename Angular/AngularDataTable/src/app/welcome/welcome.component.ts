import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: any;
  token: any;
  role: any;
  constructor(private jwtHelper: JwtHelperService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);

    const decodedToken = this.jwtHelper.decodeToken(this.token);
    this.username = decodedToken.sub;
    this.role = decodedToken.role;
    console.log(this.username);
    console.log(this.role);

  }

  ngOnInit(): void {
  }

}
