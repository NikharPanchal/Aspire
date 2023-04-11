import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../shared/admin-auth.guard';
import { AuthGuard } from '../shared/auth.guard';
import { BlogListComponent } from './blog-list.component';

const routes: Routes = [
  { path: 'blog-list', component: BlogListComponent, canActivate: [AdminAuthGuard, AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogListRoutingModule { }
