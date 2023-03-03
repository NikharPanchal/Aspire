import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  checkLogin(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      return true;
    }
    else {
      return false;
    }
  }

}
