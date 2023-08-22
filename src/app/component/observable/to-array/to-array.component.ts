import { Component, OnInit } from '@angular/core';
import { of, toArray, interval, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  arr1: number[] = []
  arr2: number[] = []
  constructor(private appendEl: DesignUtilityService) { }

  ngOnInit(): void {
    // Example toArray()
    of(1, 2, 3, 4, 5).pipe(toArray()).subscribe(x => this.arr1 = x)
    interval(1000).pipe(take(5), toArray()).subscribe(x => this.arr2 = x
    )
  }

}
