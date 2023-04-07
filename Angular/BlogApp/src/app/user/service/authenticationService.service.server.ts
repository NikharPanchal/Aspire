import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceServiceServer {

  constructor(private http: HttpClient,
    private route: Router) {

  }
  myUrl = "http://localhost:3000/user";

  getAllData() {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.get("http://localhost:8080/blog/hasuser", { headers: headers })
  }

  getalluserdata() {
    return this.http.get(this.myUrl + '/?role=user')
  }

  registerUser(userData: any): Observable<any> {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.post("http://localhost:8080/blog/save", userData, { headers: headers });
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

  isLoginUser() {
    if (sessionStorage.getItem('user') != null) {
      return true;
    }
    else {
      return false;
    }
  }
  isRoleAdmin() {
    const sessionData = JSON.parse(sessionStorage.getItem('user') || '');
    if (sessionData[0].role === 'admin') {

      return true;
    }
    else {
      return false;
    }
  }
}