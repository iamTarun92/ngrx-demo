import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
  {
    path: '', component: FeatureModuleComponent,
    children: [
      {
        path: 'counter',
        loadChildren: () =>
          import('./counter/counter.module').then((m) => m.CounterModule),
      },
      {
        path: 'observable',
        loadChildren: () =>
          import('./observable/observable.module').then((m) => m.ObservableModule),
      },
      {
        path: 'user-list',
        loadChildren: () =>
          import('./user-list/user-list.module').then((m) => m.UserListModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
