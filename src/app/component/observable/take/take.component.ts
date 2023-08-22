import { Component, OnInit } from '@angular/core';
import { from, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  userNames = from(['Tarun', 'Arjun', 'Mantu', 'Komal', 'Harish', 'Lalit'])
  condition = timer(5000)
  constructor(private _ds: DesignUtilityService) { }

  ngOnInit(): void {
    this.userNames.pipe(take(2)).subscribe(res => {
      this._ds.appendElement(res, 'elContainer1', '')
    })
    this.userNames.pipe(takeLast(2)).subscribe(res => {
      this._ds.appendElement(res, 'elContainer2', '')
    })
    interval(1000).pipe(takeUntil(this.condition)).subscribe(res => {
      this._ds.appendElement(res, 'elContainer3', '')
    })
  }
}
