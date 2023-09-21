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
import { HeaderComponent } from './component/header/header.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplayComponent } from './component/observable/replay/replay.component';
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    // StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({  logOnly: !isDevMode() }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : []
    // EffectsModule.forRoot([UserEffects,]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
