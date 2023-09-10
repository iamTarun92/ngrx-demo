import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {
  @Output() increment = new EventEmitter<void>()
  @Output() decrement = new EventEmitter<void>()
  @Output() reset = new EventEmitter<void>()

  OnIncrement() {
    this.increment.emit()
  }
  OnDecrement() {
    this.decrement.emit()
  }
  OnReset() {
    this.reset.emit()
  }
}
