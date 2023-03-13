import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/authenticationService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform!: FormGroup;
  subimitted: boolean = false;
  returnurl!: string;
  message = "";
  emailmessage = "";
  private userArr: any = [];
  password = 'password';

  constructor(private formbuilder: FormBuilder, private loginservice: LoginserviceService,
    private route: Router) {

    this.registerform = this.formbuilder.group({
      // id: this.formbuilder.control(['', Validators.compose([Validators.required, Validators.minLength(5)])]),
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      role: this.formbuilder.control('user'),
      isactive: this.formbuilder.control(false)
    })
  }

  register() {

    this.subimitted = true;
    if (this.subimitted) {
      this.loginservice.checkLogincredential(this.registerform.value.email).subscribe((data: any) => {
        console.log(data);
        if (data != '') {
          this.emailmessage = "Email is already exists.."
        }
        else {
          if (this.registerform.valid) {
            console.log("form submittted");
            this.loginservice.registerUser(this.registerform.value).subscribe(data => {
              console.log(this.registerform.value);

              this.userArr = JSON.parse(localStorage.getItem('userData') || '{}');

              this.userArr.push(this.registerform.value);
              console.log(this.userArr);


              localStorage.setItem('userData', JSON.stringify(this.userArr));
              console.log('registration sucess');
              this.message = "Registration success";
            });
          }
          else {
            //this.message = "invalid information";
          }
        }
      })
    }
    // if (this.registerform.valid) {
    //   console.log("form submittted");
    //   this.loginservice.registerUser(this.registerform.value).subscribe(data => {
    //     console.log(this.registerform.value);

    //     this.userArr = JSON.parse(localStorage.getItem('userData') || '{}');

    //     this.userArr.push(this.registerform.value);
    //     console.log(this.userArr);


    //     localStorage.setItem('userData', JSON.stringify(this.userArr));
    //     console.log('registration sucess');
    //     this.message = "Registration success";
    //   });
    // }
    // else {
    //   //this.message = "invalid information";
    // }
  }

  ngOnInit(): void {
  }

  showPassword() {
    if (this.password == 'password') {
      this.password = 'text';
    }
    else {
      this.password = 'password';
    }
  }

}
