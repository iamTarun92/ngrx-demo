import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, switchMap, filter, pluck } from 'rxjs';
import { Users } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('searchform') searchform?: NgForm
  searchResults: Users[] = []
  searchResultsCount: number = 0

  constructor(private userService: UsersService) { }

  ngAfterViewInit(): void {
    // this.userService.getAllData('Bret').subscribe(res => console.log(res))

    const fromValue = this.searchform?.valueChanges
    fromValue?.pipe(
      map(data => data.searchTerm),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.userService.getAllData(data))
    ).subscribe(res => {
      this.searchResults = res
      this.searchResultsCount = this.searchResults.length
    }
    )
  }
}
