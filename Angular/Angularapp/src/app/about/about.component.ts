import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../user/service/loginservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: any;
  constructor(private loginservice: LoginserviceService) {


  }

  ngOnInit(): void {
    this.loginservice.getalldata().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
