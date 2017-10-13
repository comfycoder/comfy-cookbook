import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.scss']
})
export class AuthRememberComponent implements OnInit {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(value: boolean) {
    this.checked.emit(value);
  }
}
