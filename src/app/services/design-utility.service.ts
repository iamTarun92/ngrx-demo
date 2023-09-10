import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>()
  username = new Subject<string>()
  videoEmit = new ReplaySubject<string>(5)

  constructor() { }
  appendElement(val: any, ele: any, customClass: string) {
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(ele)?.appendChild(el).classList.add(customClass)
  }
}
