import { Component, OnInit, Output, EventEmitter, ContentChildren, ViewChildren,
  QueryList, AfterContentInit, ViewChild, AfterViewInit, ElementRef, Renderer, ChangeDetectorRef } from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private cd: ChangeDetectorRef,
    private render: Renderer
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.render.setElementAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.render.invokeElementMethod(this.email.nativeElement, 'focus');
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
