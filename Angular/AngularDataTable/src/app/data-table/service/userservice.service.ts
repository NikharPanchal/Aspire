import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  myUrl = "http://localhost:8081/api";
  constructor(private http: HttpClient) {

  }

  getAllUser() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get("http://localhost:8081/api/users");
  }

  deleteUser(userId: any): Observable<any> {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.delete(`${"http://localhost:8081/api/user/"}${userId}`, { headers });
  }

  saveUser(userData: any): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa("admin:admin"));
    headers = headers.append("Content-Type", "application/json");

    return this.http.post("http://localhost:8081/api/save", userData, { headers });
  }

  getUserById(userId: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa("admin:admin"));
    headers = headers.append("Content-Type", "application/json");
    return this.http.get(`${"http://localhost:8081/api/user/"}${userId}`, { headers });
  }

  checkLoginCredential(userData: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post<any>("http://localhost:8081/api/token", userData, { headers })
      .toPromise()
      .then(response => {
        localStorage.setItem('token', response.token);
        return response;
      });
  }

  saveFile(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);

    return this.http.post("http://localhost:8081/api/savefile", formData,{ observe: 'response' });
  }
}