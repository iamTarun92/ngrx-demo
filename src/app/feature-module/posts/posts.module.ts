import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from 'src/app/store/posts/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from 'src/app/store/posts/posts.effects';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects])

  ]
})
export class PostsModule { }
