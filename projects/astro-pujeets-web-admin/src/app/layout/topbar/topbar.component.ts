import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<number> = new EventEmitter();
  openMenuCount = 0;
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [{ label: 'Consultants' }, { label: 'New Consultant' }];
  }

  triggerMenu() {
    this.openMenuCount++;
    this.toggleMenu.emit(this.openMenuCount);
  }

  logout() {
    this.router.navigateByUrl('/auth/sign-in');
  }
}
