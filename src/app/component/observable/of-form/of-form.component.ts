import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.scss']
})
export class OfFormComponent implements OnInit {

  constructor(private appendEl: DesignUtilityService) { }

  ngOnInit(): void {

    // Example of()
    of(1, 2, 3, 4, 5).subscribe(x => this.appendEl.appendElement(`User - ${x}`, 'elContainer1', 'list-group-item'))

    // Example from()
    from([1, 2, 3, 4, 5]).subscribe(x => this.appendEl.appendElement(`User - ${x}`, 'elContainer2', 'list-group-item'))
  }


}
