import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateform!: FormGroup;
  subimitted: boolean = false;
  message = '';
  userId: any;
  password = '';

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private userservice: LoginserviceService) {
    this.updateform = this.formbuilder.group({
      id: this.formbuilder.control([null, Validators.compose([Validators.required, Validators.minLength(5)])]),
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      role: this.formbuilder.control('user'),
    })
  }
  update() {
    this.subimitted = true;
    if (this.updateform.valid) {
      this.userservice.updateUser(this.userId, this.updateform.value).subscribe(data => {
        console.log(this.updateform.value);
        console.log('update sucess');
        this.message = "Update success";
      });
    }
  }
  showPassword() {
    if (this.password == 'password') {
      this.password = 'text';
    }
    else {
      this.password = 'password';
    }
  }
  ngOnInit(): void {
    this.password = "password";
    this.userId = this.route.snapshot.params['userId'];
    console.log("userid", this.userId);
    this.userservice.getUserInfoById(this.userId).subscribe((data) => {
      console.log(data);
      console.log(data[0].fname);
      if (data != null) {
        this.updateform = this.formbuilder.group({
          id: data[0].id,
          fname: data[0].fname,
          lname: data[0].lname,
          email: data[0].email,
          password: data[0].password,
          role: data[0].role,
        });
      }

    });
  }
}