import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
