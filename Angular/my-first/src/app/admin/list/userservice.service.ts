import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUserApi(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
