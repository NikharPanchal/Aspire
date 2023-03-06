import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
    private loginservice: LoginserviceService) {
    this.loginform = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.subimitted = true;
    if (this.loginform.valid) {
      console.log("form submittted");
      this.loginservice.checkLogincredential(this.loginform.value.email).subscribe(data => {
        this.userinfo = data;
        console.log('keyboard', this.loginform.value.password);
        console.log('database', this.userinfo.password);

        if (this.userinfo.password === this.loginform.value.password) {
          console.log('your data is there');
        }
        else {
          this.message = 'invalid id and password';
        }
      });
    }
    else {

    }
  }

  ngOnInit(): void {
  }

}
