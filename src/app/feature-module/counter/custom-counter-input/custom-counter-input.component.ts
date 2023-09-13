import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customInput } from 'src/app/store/counter/counter.actions';
import { counterState } from 'src/app/models/user';
import { getChannelName } from 'src/app/store/counter/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {
  value = ''
  constructor(private store: Store) { }
  onAdd() {
    this.store.dispatch(customInput({ num: +this.value }))
  }
}
