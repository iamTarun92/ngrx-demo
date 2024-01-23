import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
import { UserActions } from '../../store/user/user.actions';
import * as formUser from '../../store/user/user.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  pageTitle = 'Store'
  users: User[] = []
  constructor(private apiService: ApiService, private store: Store) {
  }
  ngOnInit(): void {
    // using store satrt here
    // this.store.dispatch(UserActions.loadUsers())
    // this.store.pipe(select(formUser.getUsers)).subscribe((users) =>
    //   this.users = users
    // )
    // end here


    // without store get user list start here
    this.apiService.getUsers().subscribe(res => {
      this.users = res
    });
    // end here
  }
}
