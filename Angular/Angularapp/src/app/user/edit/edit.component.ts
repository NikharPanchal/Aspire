import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../service/authenticationService.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  subimitted: boolean = false;
  message = '';
  userId: any;
  passwordcheck = '';
  editComponent!: EditComponent;
  updateform: FormGroup;

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private userservice: LoginserviceService) {
    console.log('constructor');
    this.updateform = this.formbuilder.group({
      id: this.formbuilder.control(['', Validators.compose([Validators.required, Validators.minLength(5)])]),
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      role: this.formbuilder.control('user'),
      isactive: this.formbuilder.control(true)
    })
  }

  // updateform = new FormGroup({
  //   id: new FormControl({ value: 0, disabled: true }),
  //   fname: new FormControl('', Validators.required),
  //   lname: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
  //   password: new FormControl('', Validators.required)

  // })

  ngOnInit(): void {

    console.log('oninit');
    this.passwordcheck = "password";
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
          isactive: data[0].isactive
        });
      }
    });
  }
  update() {
    console.log('update function');
    this.subimitted = true;
    if (this.updateform.valid) {
      this.userservice.updateUser(this.userId, this.updateform.value).subscribe(data => {
        console.log(this.updateform.value);
        console.log('update sucess');
        this.message = "Update success";
      });
    } else {
      this.updateform.invalid;
    }
  }
  showPassword() {
    if (this.passwordcheck == 'password') {
      this.passwordcheck = 'text';
    }
    else {
      this.passwordcheck = 'password';
    }
  }
}
