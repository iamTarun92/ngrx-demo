import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class AuthEffects {


    constructor(
        private actions$: Actions,
        private apService: ApiService,
        private store: Store<AppState>
    ) { }
}