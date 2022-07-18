import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidebarModule,
    BreadcrumbModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
  ],
})
export class LayoutModule {}
