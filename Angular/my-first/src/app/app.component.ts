import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = "my-app";
  name = "first demo "
  myModel: string = "nikhar";

  rootFun(e: Event) {
    alert("you are in root component");
  }

}
