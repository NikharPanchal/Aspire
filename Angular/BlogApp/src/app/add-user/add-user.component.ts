import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  showMsg: boolean = false;
  userInfo: any;
  subimitted: boolean = false;

  emailmessage = "";
  private userArr: any = [];
  constructor(private formbuilder: FormBuilder, private service: LoginserviceServiceServer, private route: ActivatedRoute) { }

  submit() {
    this.subimitted = true;

    if (this.registerform.valid) {
      console.log("form submittted");
      this.service.registerUser(this.registerform.value).subscribe(data => {
        console.log(this.registerform.value);

        // this.userArr = JSON.parse(localStorage.getItem('userData') || '{}');

        // this.userArr.push(this.registerform.value);
        // console.log(this.userArr);
        console.log('registration sucess');
        this.showMsg = true;
      });
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
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
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
