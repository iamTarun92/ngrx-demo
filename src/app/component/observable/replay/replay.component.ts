import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  userList1 = ['Angular 1', 'Angular 2']
  userList2: string[] = []
  userList3: string[] = []
  subscribeMode2 = false
  subscribeMode3 = false
  // subscribeOption2: Subscription
  // subscribeOption3:Subscription

  constructor(private ds: DesignUtilityService, private subscribeOption2: Subscription) {}
  ngOnInit(): void {
    this.ds.videoEmit.subscribe(res => this.userList1.push(res))
  }


  addVideo(payload: string) {
    this.ds.videoEmit.next(payload)
  }
  user2ubscribe() {
    this.subscribeMode2 = !this.subscribeMode2
    this.ds.videoEmit.subscribe(res => this.userList2.push(res))
  }
  user3ubscribe() {
    this.subscribeMode3 = !this.subscribeMode3
    this.ds.videoEmit.subscribe(res => this.userList2.push(res))

  }
}
