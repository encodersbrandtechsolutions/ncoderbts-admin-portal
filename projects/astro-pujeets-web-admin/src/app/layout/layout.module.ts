import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { ConsultantModule } from './consultant/consultant.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ServiceCategoryModule } from './service-category/service-category.module';
import { ServiceBookingModule } from './service-booking/service-booking.module';
import { UserModule } from './user/user.module';

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
    /**Pages**/
    ConsultantModule,
    CustomerModule,
    OrderModule,
    ProductModule,
    ServiceCategoryModule,
    ServiceBookingModule,
    UserModule,
  ],
})
export class LayoutModule {}
