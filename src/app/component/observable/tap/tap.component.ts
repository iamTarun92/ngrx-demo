import { Component, OnInit } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  colors = ['Red', 'Green', 'Black', 'Purple']
  setColor:string=''
  constructor(private _ds: DesignUtilityService) { }
  ngOnInit(): void {
    interval(1000).pipe(map(res => this.setColor = this.colors[res]), take(this.colors.length)).subscribe(res => {
      this._ds.appendElement(res, 'elContainer', '')
    })
  }
}
