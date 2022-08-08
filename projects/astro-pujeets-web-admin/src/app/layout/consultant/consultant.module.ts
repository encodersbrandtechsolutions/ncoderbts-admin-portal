import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantFormComponent } from './form/consultant-form.component';
import { ConsultantListComponent } from './list/consultant-list.component';
import { ConsultantComponent } from './consultant.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ConsultantFormComponent,
    ConsultantListComponent,
    ConsultantComponent,
  ],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    ButtonModule,
    CardModule,
    ImageModule,
    TabViewModule,
    InputTextModule,
  ],
})
export class ConsultantModule {}
