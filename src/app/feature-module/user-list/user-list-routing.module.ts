import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: UserListComponent,
    children: [
      {
        path: ':id',
        data: { module: 'users', action: 'View' },
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: ':id/edit',
        data: { module: 'users', action: 'View' },
        loadChildren: () =>
          import('./edit-user/edit-user.module').then((m) => m.EditUserModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
