import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';


@NgModule({
  declarations: [
    DeletedialogComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule
  ]
})
export class DataTableModule { }
