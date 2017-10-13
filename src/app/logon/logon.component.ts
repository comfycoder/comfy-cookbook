import { Component, OnInit } from '@angular/core';
import { User } from '../auth-form/auth-form.interface';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnInit {

  rememberMe: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
    console.log('Remember me = ' + remember);
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
