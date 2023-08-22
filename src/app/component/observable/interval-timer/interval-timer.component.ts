import { Component, OnInit } from '@angular/core';
import { interval, take, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {
  obsCount = 0
  intervalNum = interval(1000);
  timerNum = timer(2000, 1000)

  constructor(private appendEl: DesignUtilityService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.obsCount = 1
    }, 1000);

    // Example interval()
    this.intervalNum.pipe(take(5)).subscribe(x =>
      this.appendEl.appendElement(`User - ${x}`, 'elContainer1', 'list-group-item')
    )

    // Example timer()
    this.timerNum.pipe(take(5)).subscribe(x =>
      this.appendEl.appendElement(`User - ${x}`, 'elContainer2', 'list-group-item')
    )
  }
}
