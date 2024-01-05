import { Component, OnInit } from '@angular/core';
import { fromEvent, map, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private appendEl: DesignUtilityService) { }

  msg2: string = 'Pointer position - 0'
  carArr = [{
    "color": "purple",
    "type": "minivan",
  },
  {
    "color": "red",
    "type": "station wagon",
  }]
  ngOnInit(): void {
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(map(ev => `Pointer position - ${ev.clientX}`))
    positions.subscribe(x => this.msg2 = x
    );
    from(this.carArr).pipe(map(data => data.color)).subscribe(x => this.appendEl.appendElement(`Color - ${x.toUpperCase()}`, 'elContainer1', 'list-group-item'));
  }

}
