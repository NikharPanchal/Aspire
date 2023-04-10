import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceServiceServer {
  token: any;
  username: any;
  role: any;

  constructor(private http: HttpClient,
    private route: Router, private jwtHelper: JwtHelperService) {

  }
  myUrl = "http://localhost:8080/blog";

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

  checkLogincredential(userData: any) {
    let username = 'admin';
    let password = 'admin';

    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    headers.append("Content-Type", "application/json");

    // return this.http.post<any>("http://localhost:8081/api/token", userData, { headers })
    //   .toPromise()
    //   .then(response => {
    //     localStorage.setItem('token', response.token);
    //     return response;
    //   });
    return this.http.post<any>("http://localhost:8080/blog/token", userData, { headers }).toPromise()
      .then(response => {
        localStorage.setItem('token', response.token);
        return response;
      })
  }

  getUserInfoById(id: any): Observable<any> {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.get(`${this.myUrl + "/userbyid"}/${id}`, { headers: headers });
  }

  deleteUser(id: any) {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.delete(`${this.myUrl + "/delete"}/${id}`, { headers: headers });
  }
  updateUser(userId: any, updateData: any) {
    let username = 'admin';
    let password = 'admin';

    const header = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.put(`${this.myUrl + "/update"}/${userId}`, updateData, { headers: header });
  }

  updateStatus(id: any) {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.get(`${this.myUrl + "/status"}/${id}`, { headers: headers });
  }

  isLoginUser() {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    else {
      return false;
    }
  }
  isRoleAdmin() {
    this.token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(this.token);
    this.username = decodedToken.sub;
    this.role = decodedToken.role;
    console.log(this.token);
    if (this.role === 'admin') {
      return true;
    }
    else {
      return false;
    }
  }
}