import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent,
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./add-post/add-post.module').then((m) => m.AddPostModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./edit-post/edit-post.module').then((m) => m.EditPostModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
