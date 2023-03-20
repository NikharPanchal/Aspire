import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  myUrl = "http://localhost:8081/users";

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get(this.myUrl);
  }

  deleteUser(userId: any): Observable<any> {
    return this.http.delete("http://localhost:8081/user/" + userId);
  }
}