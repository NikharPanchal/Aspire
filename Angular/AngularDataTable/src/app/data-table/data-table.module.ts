import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    DeletedialogComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    MatTooltipModule
  ]
})
export class DataTableModule { }
