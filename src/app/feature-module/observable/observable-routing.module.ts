import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable.component';
import { ListComponent } from 'src/app/component/observable/list/list.component';
import { FormEventComponent } from 'src/app/component/observable/form-event/form-event.component';
import { IntervalTimerComponent } from 'src/app/component/observable/interval-timer/interval-timer.component';
import { OfFormComponent } from 'src/app/component/observable/of-form/of-form.component';
import { ToArrayComponent } from 'src/app/component/observable/to-array/to-array.component';
import { MapComponent } from 'src/app/component/observable/map/map.component';
import { FilterComponent } from 'src/app/component/observable/filter/filter.component';
import { TapComponent } from 'src/app/component/observable/tap/tap.component';
import { TakeComponent } from 'src/app/component/observable/take/take.component';
import { RetryComponent } from 'src/app/component/observable/retry/retry.component';
import { DebounceTimeComponent } from 'src/app/component/observable/debounce-time/debounce-time.component';
import { SubjectComponent } from 'src/app/component/observable/subject/subject.component';
import { SwitchMapComponent } from 'src/app/component/observable/switch-map/switch-map.component';
import { ReplayComponent } from 'src/app/component/observable/replay/replay.component';

const routes: Routes = [
  {
    path: '', component: ObservableComponent,
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
      { path: 'replay', component: ReplayComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
