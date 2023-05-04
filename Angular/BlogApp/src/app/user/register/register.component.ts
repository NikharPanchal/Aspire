import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../service/authenticationService.service';
import { LoginserviceServiceServer } from '../service/authenticationService.service.server';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status: boolean = false;
  userInfo: any;
  subimitted: boolean = false;
  showMsg = '';
  emailmessage = "";
  private userArr: any = [];
  constructor(private formbuilder: FormBuilder, private service: LoginserviceServiceServer, private route: ActivatedRoute) { }

  submit() {
    this.subimitted = true;

    if (this.registerform.valid) {
      console.log("form submittted");

      this.service.checkEmailAddressExist(this.registerform.value).subscribe((data) => {
        console.log(data);
        if (data == false) {
          this.service.registerUser(this.registerform.value).subscribe(data => {
            console.log(this.registerform.value);

            // this.userArr = JSON.parse(localStorage.getItem('userData') || '{}');

            // this.userArr.push(this.registerform.value);
            // console.log(this.userArr);
            console.log('registration sucess');
            this.showMsg = "Registration Success";
            this.status = true;
          });
        }
        else {
          this.showMsg = "Email is already taken";
          this.status = false;
        }
      })


      // this.service.registerUser(this.registerform.value).subscribe(data => {
      //   console.log(this.registerform.value);

      //   // this.userArr = JSON.parse(localStorage.getItem('userData') || '{}');

      //   // this.userArr.push(this.registerform.value);
      //   // console.log(this.userArr);
      //   console.log('registration sucess');
      //   this.showMsg = true;
      // });
    }
    else {
      //this.message = "invalid information";
    }
  }
  hide = true;
  registerform: any;

  loadform() {
    this.registerform = this.formbuilder.group({
      id: new FormControl(''),
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),],
      password: ['', Validators.required],
      role: this.formbuilder.control('user'),
      isactive: this.formbuilder.control(false)
    })
  }
  ngOnInit(): void {
    this.loadform();
    const userId = this.route.snapshot.params['userId'];
    console.log(userId);
    this.service.getUserInfoById(userId).subscribe((data: any) => {
      this.userInfo = data;
      console.log(this.userInfo);
      this.registerform.patchValue(data);
    })
  }
}
