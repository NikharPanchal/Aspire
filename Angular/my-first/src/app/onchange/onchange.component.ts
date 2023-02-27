import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html'
})
export class OnchangeComponent implements OnChanges {

  @Input() userInput: any;
  ngOnChanges(changes: SimpleChanges) {
    for (const i in changes) {
      const value = changes[i];
      const cur = JSON.stringify(value.currentValue)
      const prev = JSON.stringify(value.previousValue)
      console.log("Current Value = " + cur + " Previous value = " + prev);

    }
  }
}
