import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastModule, ConfirmDialogModule],
  exports: [ToastModule, ConfirmDialogModule],
})
export class PrimengSharedModule {}
