import { Component } from '@angular/core';
import { Users } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
import { UserActions } from '../../store/user/user.actions';
import * as formUser from '../../store/user/user.selectors';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  pageTitle = 'Store'
  users: Users[] = []
  constructor(private userService: UsersService, private store: Store) {
  }
  ngOnInit(): void {
    // using store satrt here
    // this.store.dispatch(UserActions.loadUsers())
    // this.store.pipe(select(formUser.getUsers)).subscribe((users) =>
    //   this.users = users
    // )
    // end here


    // without store get user list start here
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res
    });
    // end here
  }
}
