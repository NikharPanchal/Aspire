import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user.component';

const routes: Routes = [
  {
    path: 'add', component: AddUserComponent,
  },
  {
    path: 'edituser/:userId', component: AddUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule { }
