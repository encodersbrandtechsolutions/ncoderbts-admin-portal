import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = true;
  @Input() set openSidebar(sidebarTrigger: number) {
    if (sidebarTrigger > 0) {
      this.isSidebarOpen = this.isSidebarOpen ? false : true;
    }
  }

  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Orders',
        icon: '',
      },
      {
        label: 'Service Bookings',
        icon: '',
      },
      {
        label: 'Consultants',
        icon: '',
      },
      {
        label: 'Customers',
        icon: '',
      },
      {
        label: 'Services',
        icon: '',
      },
      {
        label: 'Products',
        icon: '',
      },
    ];
  }
}
