import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient,
    private route: Router) {
    console.log(route.url);
  }
  myUrl = "http://localhost:3000/user";

  getalldata() {
    return this.http.get(this.myUrl)
  }

  registerUser(userData: any) {
    //localStorage.setItem('userdata', JSON.stringify(userData));
    return this.http.post(this.myUrl, userData);
  }

  // checkLogincredential(logindata: any) {
  //   console.log(logindata);

  //   return this.http.get(this.myUrl + '/?email=' + logindata);
  // }
  checkLogincredential(logindata: any) {
    console.log(logindata);
    // let userInfo = JSON.parse(localStorage.getItem('userData') || '{}');
    // console.log(userInfo);
    return this.http.get(this.myUrl + '/?email=' + logindata);
  }
}