import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @Input() heading = 'Encoders Brandtech';
  @Input() subHeading = 'Admin Panel';

  constructor() {}

  ngOnInit(): void {}
}
