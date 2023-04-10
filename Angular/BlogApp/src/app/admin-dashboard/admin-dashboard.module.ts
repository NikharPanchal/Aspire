import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent, ChangeStatusDialog, DialogAnimationsExampleDialog } from './admin-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, matDialogAnimations } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    DialogAnimationsExampleDialog,
    ChangeStatusDialog
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class AdminDashboardModule {
}
