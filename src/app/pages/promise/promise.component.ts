import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  promise_1: any = 'Data Show here'
  promise_2: any = 'Data Show here'
  buyLaotp = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I'm Promise.")
    }, 2000);
  })
  // Ex - 01 : with promise
  fatch1() {
    this.promise_1 = 'Fatching Data...'
    this.buyLaotp.then(res => this.promise_1 = res)
  }
  // Ex - 01 : with async
  async fatch2() {
    this.promise_2 = 'Fatching Data...'
    this.promise_2 = await this.buyLaotp
  }
  ngOnInit(): void { }
}
