import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { UserActions } from './user.actions';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private usersService: UsersService) { }
  
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map((users:any) => UserActions.loadUsersSuccess({data:users})),
        catchError(() => EMPTY)
      ))
  )
  );
}
