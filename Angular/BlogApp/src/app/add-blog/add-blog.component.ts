import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
status: any;
showMsg: any;
blogForm!: FormGroup;
subimitted: boolean = false;
token:any;
  username: any;

  constructor(private formbuilder:FormBuilder,
    private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    {
      this.token = localStorage.getItem('token');
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.username = decodedToken.sub;
    }
    this.blogForm = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      email:[{ value: this.username, disabled: true },Validators.required],
    })
  }

  submit() {
    this.subimitted=true;
    if(this.blogForm.valid){
      alert('submit');
    }

  }
}
