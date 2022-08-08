import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = false;
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
        routerLink: '/order',
      },
      {
        label: 'Service Bookings',
        routerLink: '/service-booking',
      },
      {
        label: 'Consultants',
        routerLink: '/consultant',
      },
      {
        label: 'Customers',
        routerLink: '/customer',
      },
      {
        label: 'Services',
        routerLink: '/service-category',
      },
      {
        label: 'Products',
        routerLink: '/product',
      },
    ];
  }
}
