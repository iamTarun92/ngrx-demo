import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from 'src/app/store/posts/posts.state';
import { Observable } from 'rxjs';
import { getPosts } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$: Observable<Post[]> | undefined
  constructor(private store: Store<AppState>) {
    this.posts$ = store.select(getPosts)
  }
}
