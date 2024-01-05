import { Component, OnInit, AfterViewInit } from '@angular/core';
import { from, filter, toArray } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // EX - 01
  dataArray = [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john@example.com",
      "gender": "Male"
    },
    {
      "id": 2,
      "name": "Johnny",
      "email": "johnny@example.com",
      "gender": "Male"
    }
  ]
  filterData1: any
  filterData2: any
  constructor(private userData: UsersService) {
    // userData.getUsers().subscribe(res => {
    //   this.dataArray = res
    //   this.source = from(this.dataArray).pipe(filter(data => data?.name?.length < 7), toArray()).subscribe(res => this.data1 = res)
    // })
  }

  ngOnInit(): void {
    from(this.dataArray).pipe(filter(data => data?.name?.length < 7), toArray()).subscribe(res => this.filterData1 = res)
    from(this.dataArray).pipe(filter(data => data.gender === 'Male'), toArray()).subscribe(res => this.filterData2 = res)
  }

}
