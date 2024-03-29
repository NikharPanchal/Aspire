import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../shared/admin-auth.guard';
import { AuthGuard } from '../shared/auth.guard';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
