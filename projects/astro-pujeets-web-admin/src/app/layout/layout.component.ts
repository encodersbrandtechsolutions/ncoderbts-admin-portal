import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  triggerMenu = 0;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(trigger: number) {
    this.triggerMenu = trigger;
  }
}
