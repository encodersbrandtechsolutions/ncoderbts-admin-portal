import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { ConsultantComponent } from './consultant.component';
import { ConsultantFormComponent } from './form/consultant-form.component';
import { ConsultantListComponent } from './list/consultant-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultantComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: ConsultantListComponent,
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        children: [],
      },
      {
        path: 'profile/:id',
        component: ConsultantFormComponent,
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        children: [],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantRoutingModule {}
