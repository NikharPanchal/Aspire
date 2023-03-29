import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  myUrl = "http://localhost:8081/users";

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.append("Authorization", "Basic " + btoa("admin:admin"));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

    return this.http.get(this.myUrl, { headers });
  }

  deleteUser(userId: any): Observable<any> {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.delete(`${"http://localhost:8081/user/"}${userId}`, { headers });
  }

  saveUser(userData: any): Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.append("Authorization", "Basic " + btoa("admin:admin"));

    return this.http.post("http://localhost:8081/save", userData, { headers });
  }

  getUserById(userId: any): Observable<any> {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.get(`${"http://localhost:8081/user/"}${userId}`, { headers });
  }

  checkLoginCredential(userData: any) {
    let headers = new HttpHeaders();

    headers = headers.append("Authorization", "Basic " + btoa("admin:admin"));
    headers = headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:8081/token", userData, { headers });
  }
}