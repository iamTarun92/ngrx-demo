import { Component, OnDestroy } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnDestroy {
  username: string = ''
  headerText='sasasas'

  constructor(private designService: DesignUtilityService) {
    designService.exclusive.next(true)
    designService.username.subscribe(res => this.username = res)
  }

  ngOnDestroy(): void {
    this.designService.exclusive.next(false)
  }

}
