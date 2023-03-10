import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.myUrl, userData);
  }

  checkLogincredential(username: any) {
    return this.http.get(this.myUrl + '/?email=' + username);
  }

  getUserInfoById(id: any): Observable<any> {
    return this.http.get(this.myUrl + '/?id=' + id);
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.myUrl}/${id}`);
  }
  updateUser(userId: any, updateData: any) {
    return this.http.put(`${this.myUrl}/${userId}`, updateData);
  }

  updateStatus(userid: any) {
    return this.http.patch(`${this.myUrl}/${userid}`, {
      isactive: true,
    })
  }

}