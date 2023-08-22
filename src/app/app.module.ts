import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/user/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './pages/counter/counter.component';
import { counterReducer } from './store/counter/counter.reducer';
import { HeaderComponent } from './component/header/header.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { ObservableComponent } from './pages/observable/observable.component';
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
import { SubjectComponent } from './component/observable/subject/subject.component';
import { InputComponent } from './component/observable/subject/input/input.component';
import { SwitchMapComponent } from './component/observable/switch-map/switch-map.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CounterComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FormEventComponent,
    IntervalTimerComponent,
    OfFormComponent,
    ToArrayComponent,
    MapComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    InputComponent,
    SwitchMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ counter: counterReducer }),
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : []
    EffectsModule.forRoot([UserEffects,]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
