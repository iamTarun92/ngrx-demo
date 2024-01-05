import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: FeatureModuleComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'promise',
        data: { module: 'promise', action: 'View' },
        loadChildren: () =>
          import('./promise/promise.module').then((m) => m.PromiseModule),
      },
      {
        path: 'observable',
        data: { module: 'observable', action: 'View' },
        loadChildren: () =>
          import('./observable/observable.module').then((m) => m.ObservableModule),
      },
      {
        path: 'users',
        data: { module: 'users', action: 'View' },
        loadChildren: () =>
          import('./user-list/user-list.module').then((m) => m.UserListModule),
      },
      {
        path: 'counter',
        data: { module: 'counter', action: 'View' },
        loadChildren: () =>
          import('./counter/counter.module').then((m) => m.CounterModule),
      },
      {
        path: 'posts',
        data: { module: 'posts', action: 'View' },
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
