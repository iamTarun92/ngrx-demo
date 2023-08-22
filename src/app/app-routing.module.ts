import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './pages/promise/promise.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { SubjectComponent } from './component/observable/subject/subject.component';
import { ListComponent } from './component/observable/list/list.component';
import { FormEventComponent } from './component/observable/form-event/form-event.component';
import { IntervalTimerComponent } from './component/observable/interval-timer/interval-timer.component';
import { OfFormComponent } from './component/observable/of-form/of-form.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { MapComponent } from './component/observable/map/map.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { TakeComponent } from './component/observable/take/take.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { DebounceTimeComponent } from './component/observable/debounce-time/debounce-time.component';
import { UsersComponent } from './pages/users/users.component';
import { CounterComponent } from './pages/counter/counter.component';
import { SwitchMapComponent } from './component/observable/switch-map/switch-map.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'user', component: UsersComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'observable', component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FormEventComponent },
      { path: 'interval', component: IntervalTimerComponent },
      { path: 'ofForm', component: OfFormComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'map', component: MapComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounceTime', component: DebounceTimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'switch-map', component: SwitchMapComponent },
    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
