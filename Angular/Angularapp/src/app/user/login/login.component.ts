import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginservice!: LoginserviceService;
  loginform!: FormGroup;
  subimitted: boolean = false;
  returnurl!: string;

  get fdata() {
    return this.loginform.controls;
  }
  login() {
    this.subimitted = true;
    if (this.loginform.valid) {
      console.log("form submittted");
    }
    this.loginservice.checkLogin(this.fdata.username.value, this.fdata.password.value)

  }

  constructor(private formbuilder: FormBuilder) {
    this.loginform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
