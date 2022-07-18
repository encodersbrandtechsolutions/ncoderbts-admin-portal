import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface ILoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'lib-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @Input() heading = 'Encoders Brandtech';
  @Input() subHeading = 'Admin Panel';

  @Output() onForgotPasswordClick: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Output() onFormSubmit: EventEmitter<ILoginForm> =
    new EventEmitter<ILoginForm>();

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  forgotPassword() {
    this.onForgotPasswordClick.emit(true);
  }

  submitForm() {
    if (this.form.valid) {
      this.onFormSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
