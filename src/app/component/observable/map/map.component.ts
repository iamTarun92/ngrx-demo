import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  msg1: string = ''
  msg2: string = 'Pointer position - 0'
  ngOnInit(): void {
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(map(ev => `Pointer position - ${ev.clientX}`))
    positions.subscribe(x => this.msg2 = x
    );
    interval(1000).pipe(map(data => `Interval count ${data}`)).subscribe(x => this.msg1 = x
    );
  }

}
