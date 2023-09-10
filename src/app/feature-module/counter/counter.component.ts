import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/store/counter/counter.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: any
  counter$: Observable<any>

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select('counter');
  }

  ngOnInit(): void {
    // this.store.select('counter').subscribe((data: any) => {
    //   this.counter = data.counter
    // })
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