import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  exclusive: boolean = false
  constructor(private designService: DesignUtilityService) {
    designService.exclusive.subscribe(res => this.exclusive = res)
  }

}
