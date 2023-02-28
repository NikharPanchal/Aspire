import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('message') mymsg: ElementRef | undefined;


  constructor() { }
  ngAfterViewInit() {
    console.log(this.mymsg);
  }

  @Output() bind = new EventEmitter();

  myFun(e: Event) {
    this.bind.emit(e);
  }
  ngOnInit(): void {

  }

}
