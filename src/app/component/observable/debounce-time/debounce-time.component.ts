import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput1') myInput1?: ElementRef
  @ViewChild('myInput2') myInput2?: ElementRef

  ngAfterViewInit(): void {
    fromEvent<any>(this.myInput1?.nativeElement, 'keyup').pipe(map((e) => e.target.value), debounceTime(500)).subscribe(res => console.log(res)
    )
    fromEvent<any>(this.myInput2?.nativeElement, 'keyup').pipe(map((e) => e.target.value), debounceTime(500), distinctUntilChanged()).subscribe(res => console.log(res)
    )
  }

}
