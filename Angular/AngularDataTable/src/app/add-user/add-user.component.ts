import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { UserserviceService } from '../data-table/service/userservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  showMsg: boolean = false;
  constructor(private formbuilder: FormBuilder, private service: UserserviceService, private route: ActivatedRoute) { }

  submit() {
    if (this.registerform.valid) {
      console.log(this.registerform.value);
      this.service.saveUser(this.registerform.value).subscribe((data: any) => {
        console.log(data);
        this.showMsg = true;
      });
    }
  }
  hide = true;
  registerform: any;

  loadform() {
    this.registerform = new FormGroup({
      userName: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)])),
      userPassword: new FormControl('', Validators.compose([Validators.required])),
      userAddress: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.loadform();
    const userId = this.route.snapshot.params['userId'];
    console.log(userId);
  }

}
