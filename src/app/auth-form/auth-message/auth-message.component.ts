import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-message',
  templateUrl: './auth-message.component.html',
  styleUrls: ['./auth-message.component.scss']
})
export class AuthMessageComponent implements OnInit {

  days: number = 7;

  constructor() { }

  ngOnInit() {
  }

}
