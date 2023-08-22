import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit, AfterViewInit {
  count = 0
  @ViewChild('addBtn') addBtn?: ElementRef

  constructor(private appendEl: DesignUtilityService) { }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe(res => {
      this.appendEl.appendElement(`User - ${this.count++}`, 'elContainer', 'list-group-item')
    }
    )
  }
}
