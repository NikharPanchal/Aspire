import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginserviceService } from '../service/authenticationService.service';
import { LoginserviceServiceServer } from '../service/authenticationService.service.server';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  subimitted: boolean = false;
  returnurl!: string;
  userinfo!: any;
  message = '';
  password = 'password';
  hide: boolean = true;
  status: boolean | undefined;
  token: any;
  username: any;
  role: any;
  constructor(private formbuilder: FormBuilder,
    private loginservice: LoginserviceServiceServer,
    private router: Router,
    private jwtHelper: JwtHelperService) {
    this.loginform = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  showPassword() {
    if (this.password == 'password') {
      this.password = 'text';
    }
    else {
      this.password = 'password';
    }
  }

  login() {
    // this.subimitted = true;
    // if (this.loginform.valid) {
    //   console.log("form submittted");
    //   this.loginservice.checkLogincredential(this.loginform.value).subscribe((data: any) => {
    //     this.userinfo = data;
    //     console.log(this.userinfo[0]);
    //     if (this.userinfo[0] != undefined && this.userinfo[0].password === this.loginform.value.password && this.userinfo[0].email === this.loginform.value.email && this.userinfo[0].isactive) {
    //       if (this.userinfo[0].role === 'admin') {
    //         this.router.navigate(['admin-dashboard']);
    //       }
    //       if (this.userinfo[0].role === 'user') {
    //         this.router.navigate(['user-dashboard']);
    //       }
    //       this.status = true;
    //       // sessionStorage.setItem('user', JSON.stringify(this.userinfo));
    //     }
    //     else {
    //       this.message = 'Please check your credentials and try again.';
    //       this.status = false
    //     }
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    // else {
    //   this.message = 'invalid username and password..';
    //   this.status = false;
    // }
    this.loginservice.checkLogincredential(this.loginform.value).then((data: any) => {
      console.log(data);
      this.message = "success";


      this.token = localStorage.getItem('token');
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.username = decodedToken.sub;
      this.role = decodedToken.role;
      if (this.role == 'admin') {
        this.router.navigate(['admin-dashboard']);
      }
      if (this.role == 'user') {
        this.router.navigate(['user-dashboard']);
      }

      this.status = true;

    }, (err: any) => {
      console.warn('invalid credential');
      this.message = 'invalid username and password..';
      this.status = false;
    });
  }

  ngOnInit(): void {
  }

}
