import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { addPost, addPostSuccess, loadPosts, loadPostsSuccess } from './posts.actions';

@Injectable()
export class PostsEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(loadPosts),
        exhaustMap(() => this.postService.getAllPost()
            .pipe(
                map(posts => {
                    return loadPostsSuccess({ posts })
                }),
                catchError(() => EMPTY)
            ))
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
        private postService: ApiService
    ) { }
}