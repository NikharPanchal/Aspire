import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin!: boolean;

  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token != null) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
  }

  logout() {
    alert("logout success");
    this.isLogin = false;
  }

}
