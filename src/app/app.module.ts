import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/user';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { counterReducer } from './store/counter/counter.reducer';
import { HeaderComponent } from './component/header/header.component';
import { PromiseComponent } from './pages/promise/promise.component';
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
import { ReplayComponent } from './component/observable/replay/replay.component';
import { UserComponent } from './component/user/user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
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
    ReplayComponent,
    UserComponent,
    EditUserComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    // StoreModule.forRoot(reducers, { metaReducers }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : []
    // EffectsModule.forRoot([UserEffects,]),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
