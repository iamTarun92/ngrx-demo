import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/app/store/counter/counter.reducer';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    CustomCounterInputComponent,
    StoreModule.forFeature('counter', counterReducer)
  ]
})
export class CounterModule { }
