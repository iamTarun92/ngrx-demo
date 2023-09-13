import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/store/counter/counter.actions';
import { Observable } from 'rxjs';
import { counterState } from 'src/app/models/user';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: any
  counter$: Observable<{ counter: number }>

  constructor(private store: Store<{ counter: counterState }>) {
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
