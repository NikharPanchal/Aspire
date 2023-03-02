import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from './admin/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoginService]
})
export class AppComponent {

  public logged: LoginService = new LoginService();

  LogIt() {
    this.logged.logIn();
  }

  public card = [
    { title: 'Tv', price: '100' },
    { title: 'Smartphone', price: '200' },
    { title: 'Headphones', price: '300' },
  ];

  myStyle = {
    width: '100px',
    height: '100px',
    background: 'green'
  }

  title = "my-app";
  name = "first demo "
  myModel: string = "nikhar";

  rootFun(e: Event) {
    alert("you are in root component");
  }

  customStyle() {
    this.myStyle.background = 'black';
  }

}
