import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { addPost, addPostSuccess, loadPosts, loadPostsFailure, loadPostsSuccess } from './posts.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { getPosts } from './posts.selectors';

@Injectable()
export class PostsEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(loadPosts),
        withLatestFrom(this.store.select(getPosts)),
        exhaustMap(([action, data]) => {
            if (!data.length) {
                return this.postService.getAllPost()
                    .pipe(
                        map(response => {
                            alert(response.status);
                            return loadPostsSuccess({ posts: response.body })
                        }),
                        catchError((error) => {
                            alert(error.status)
                            return of(loadPostsFailure({ error }))
                        })
                    )
            }
            return EMPTY
        })
    )
    );
    addPost$ = createEffect(() => this.actions$.pipe(
        ofType(addPost),
        mergeMap((action) => this.postService.addPost(action.post)
            .pipe(
                map(post => {
                    console.log(post);

                    return addPostSuccess({ post })
                }),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private postService: ApiService,
        private store: Store<AppState>
    ) { }
}