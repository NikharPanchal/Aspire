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
    private route: Router, private jwtService: JwtHelperService) {

  }
  myUrl = "http://localhost:8080/blog";

  blogUrl = "http://localhost:8080/blogs";

  // const token = localStorage.getItem('token');
  // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  // let username = 'admin';
  //   let password = 'admin';

  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })

  getAllData() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get("http://localhost:8080/blog/hasuser", { headers: headers })
  }

  getalluserdata() {
    return this.http.get(this.myUrl + '/?role=user')
  }

  checkEmailAddressExist(email: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post("http://localhost:8080/blog/checkEmail", email, { headers: headers });
  }

  registerUser(userData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
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
    return this.http.post<any>(`${this.myUrl + "/token"}`, userData, { headers }).toPromise()
      .then(response => {
        localStorage.setItem('token', response.token);
        return response;
      })
  }

  getUserInfoById(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.myUrl + "/userbyid"}/${id}`, { headers: headers });
  }

  deleteUser(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.myUrl + "/delete"}/${id}`, { headers: headers });
  }
  updateUser(userId: any, updateData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.myUrl + "/update"}/${userId}`, updateData, { headers: headers });
  }

  updateStatus(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.myUrl + "/status"}/${id}`, { headers: headers });
  }

  IsActive(email: any) {
    let username = 'admin';
    let password = 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
    return this.http.post("http://localhost:8080/blog/isactive", email, { headers: headers });
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
    const decodedToken = this.jwtService.decodeToken(this.token);
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

  getAllBlogs() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.blogUrl + "/getAllBlog"}`, { headers: headers });
  }

  deleteBlog(blogId: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.blogUrl + "/deleteBlog"}/${blogId}`, { headers: headers });
  }

  getBlogbyUserName(email: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.blogUrl + "/getBlogById"}/${email}`, { headers: headers });
  }

  saveUserBlog(blogData: FormData) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post("http://localhost:8080/blogs/saveBlog", blogData, { headers: headers });
  }

  getBlogbyBlogId(blogId: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.blogUrl + "/findBlogById"}/${blogId}`, { headers: headers });
  }

  updateUserBlogData(updateData: FormData) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post("http://localhost:8080/blogs/updateBlog", updateData, { headers: headers });
  }
}