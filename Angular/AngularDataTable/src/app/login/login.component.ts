import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../data-table/service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  hide: boolean = true;
  msg: any;
  status: boolean | undefined;
  constructor(private service: UserserviceService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      userName: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)])),
      userPassword: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)])),
    });
  }

  login() {
    console.log(this.loginform.value);
    this.service.checkLoginCredential(this.loginform.value).subscribe((data: any) => {
      console.log(data);
      this.msg = "success",
        this.status = true;
    }, (err) => {
      console.warn('invalid credential');
      this.msg = 'invalid username and password..';
      this.status = false;
    });
  }

}
