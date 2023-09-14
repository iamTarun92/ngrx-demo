import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/store/counter/counter.actions';
import { Observable } from 'rxjs';
import { counterState } from 'src/app/models/user';
import { getCounter } from 'src/app/store/counter/counter.selectors';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: any
  counter$: Observable<number>

  constructor(private store: Store<{ counter: counterState }>) {
    this.counter$ = store.select(getCounter);
  }

  ngOnInit(): void {
    this.store.pipe(select(state => state['counter'].counter)).subscribe(counter => {
      this.counter = counter
    })
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
