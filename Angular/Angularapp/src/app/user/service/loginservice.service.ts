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


  registerUser(userData: any) {
    //localStorage.setItem('userdata', JSON.stringify(userData));
    return this.http.post(this.myUrl, userData);
  }

  checkLogincredential(logindata: any) {
    console.log(logindata);

    return this.http.get(this.myUrl + '/?email=' + logindata);
  }
}