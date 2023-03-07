import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';

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
  constructor(private formbuilder: FormBuilder,
    private loginservice: LoginserviceService,
    private router: Router) {
    this.loginform = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.subimitted = true;
    if (this.loginform.valid) {
      console.log("form submittted");
      // this.loginservice.checkLogincredential(this.loginform.value.email).subscribe(data => {
      //   this.userinfo = data;

      //   if (this.userinfo[0].password === this.loginform.value.password && this.userinfo[0].isactive) {
      //     if (this.userinfo[0].role === 'admin') {
      //       console.log(this.userinfo);
      //       this.router.navigate(['admin-dashboard']);
      //     }
      //     if (this.userinfo[0].role === 'user') {
      //       this.router.navigate(['about']);
      //     }
      //     sessionStorage.setItem('user', JSON.stringify(this.userinfo));
      //   }
      //   else {
      //     this.message = 'Invalid Credential!!';
      //   }
      // });
      this.loginservice.checkLogincredential(this.loginform.value.email).subscribe((data: any) => {
        this.userinfo = data;
        if (this.userinfo[0].password === this.loginform.value.password && this.userinfo[0].isactive) {
          if (this.userinfo[0].role === 'admin') {
            console.log(this.userinfo);
            this.router.navigate(['admin-dashboard']);
          }
          if (this.userinfo[0].role === 'user') {
            this.router.navigate(['about']);
          }
          sessionStorage.setItem('user', JSON.stringify(this.userinfo));
        }
        else {
          this.message = 'Invalid Credential!!';
        }
      });
    }
    else {

    }
  }

  ngOnInit(): void {
  }

}
