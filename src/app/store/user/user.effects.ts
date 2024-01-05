import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { UserActions } from './user.actions';
import { ApiService } from 'src/app/services/api.service';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private apiService: ApiService) { }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() => this.apiService.getUsers()
      .pipe(
        map((users: any) => UserActions.loadUsersSuccess({ data: users })),
        catchError(() => EMPTY)
      ))
  )
  );
}
