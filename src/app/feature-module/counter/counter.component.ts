import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/store/counter/counter.actions';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from 'src/app/store/counter/counter.selectors';
import { counterState } from 'src/app/store/counter/counter.state';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  counter: any
  counter$: Observable<number> | undefined
  counterSubscription: Subscription | undefined

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select(getCounter);
  }

  ngOnInit(): void {
    this.counterSubscription = this.store.pipe(select(state => state.counter.counter)).subscribe(counter => {
      this.counter = counter
    })
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe()
    }
  }
  OnIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
