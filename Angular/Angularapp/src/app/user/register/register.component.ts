import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';

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
  private userArr: any = [];

  constructor(private formbuilder: FormBuilder, private loginservice: LoginserviceService,
    private route: Router) {

    this.registerform = this.formbuilder.group({
      // id: this.formbuilder.control(['', Validators.compose([Validators.required, Validators.minLength(5)])]),
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      role: this.formbuilder.control('user'),
      isactive: this.formbuilder.control(false)
    })
  }

  register() {

    this.subimitted = true;
    if (this.registerform.valid) {
      console.log("form submittted");
      this.loginservice.registerUser(this.registerform.value).subscribe(data => {
        console.log(this.registerform.value);

        this.userArr = JSON.parse(localStorage.getItem('userData') || '{}');

        this.userArr.push(this.registerform.value);
        console.log(this.userArr);


        localStorage.setItem('userData', JSON.stringify(this.userArr));
        this.route.navigate(['login']);
        console.log('registration sucess');
        this.message = "Registration success";
      });
    }
    else {
      //this.message = "invalid information";
    }
  }

  ngOnInit(): void {
  }

}
