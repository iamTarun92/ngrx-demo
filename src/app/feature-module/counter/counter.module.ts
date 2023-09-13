import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    CustomCounterInputComponent
  ]
})
export class CounterModule { }
