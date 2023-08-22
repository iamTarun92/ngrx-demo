import { Component, OnInit, AfterViewInit } from '@angular/core';
import { from, filter, toArray } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
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
    },
    {
      "id": 3,
      "name": "Robert",
      "email": "robert@example.com",
      "gender": "Male"
    },
    {
      "id": 4,
      "name": "Sharonda",
      "email": "sharon@example.com",
      "gender": "Female"
    },
    {
      "id": 5,
      "name": "Pricilla",
      "email": "pricilla@example.com",
      "gender": "Female"
    }
  ]
  filterdata1: any
  filterdata2: any
  constructor(private userData: UsersService) {
    // userData.getUsers().subscribe(res => {
    //   this.dataArray = res
    //   this.source = from(this.dataArray).pipe(filter(data => data?.name?.length < 7), toArray()).subscribe(res => this.data1 = res)
    // })
  }

  ngOnInit(): void {
    from(this.dataArray).pipe(filter(data => data?.name?.length < 7), toArray()).subscribe(res => this.filterdata1 = res)
    from(this.dataArray).pipe(filter(data => data.gender === 'Male'), toArray()).subscribe(res => this.filterdata2 = res)
  }

}
