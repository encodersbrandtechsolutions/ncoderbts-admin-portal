import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<number> = new EventEmitter();
  openMenuCount = 0;
  items: MenuItem[] = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    // this.items = [
    //   { label: 'Consultants' },
    //   { label: 'New Consultant' }
    // ];
  }

  triggerMenu() {
    this.openMenuCount++;
    this.toggleMenu.emit(this.openMenuCount);
  }

  logout() {
    this.confirmationService.confirm({
      header: 'Logout',
      message: 'Are you sure that you want to logout?',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => {
        this.authService.removeToken();
        this.messageService.clear();
        this.messageService.add({
          severity: 'success',
          summary: '',
          detail: 'Logged Out!',
        });
        this.router.navigateByUrl('/auth/sign-in');
      },
    });
  }
}
