import { Component } from '@angular/core';
import { Users } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
import { UserActions } from '../../store/user/user.actions';
import * as formUser from '../../store/user/user.selectors';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  pageTitle = 'Store'
  users: Users[] = []
  constructor(private userService: UsersService, private store: Store) { }
  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers())
    this.store.pipe(select(formUser.getUsers)).subscribe((users) =>
      this.users = users
    )


    // without store get user list start here
    // this.userService.getUsers().subscribe((res: any) => {
    //   this.users = res
    // });
    // end here
  }
}
