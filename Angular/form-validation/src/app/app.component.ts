import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registerform!: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {

    this.registerform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/)])],
      contact: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
    })
  }

  submit() {
    this.submitted = true;
    if (this.registerform.valid) {
      console.log("form submit");
    }
  }
}
