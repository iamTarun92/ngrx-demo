import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, switchMap, filter, pluck } from 'rxjs';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('searchform') searchform?: NgForm
  searchResults: User[] = []
  searchResultsCount: number = 0

  constructor(private apiService: ApiService) { }

  ngAfterViewInit(): void {
    // this.apiService.getUserByString('Bret').subscribe(res => console.log(res))

    const fromValue = this.searchform?.valueChanges
    fromValue?.pipe(
      map(data => data.searchTerm),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.apiService.getUserByString(data))
    ).subscribe(res => {
      this.searchResults = res
      this.searchResultsCount = this.searchResults.length
    }
    )
  }
}
