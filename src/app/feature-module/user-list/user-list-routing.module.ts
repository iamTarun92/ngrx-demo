import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { EditUserComponent } from 'src/app/component/edit-user/edit-user.component';
import { UserComponent } from 'src/app/component/user/user.component';

const routes: Routes = [
  {
    path: '', component: UserListComponent,
    // canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/edit', component: EditUserComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
