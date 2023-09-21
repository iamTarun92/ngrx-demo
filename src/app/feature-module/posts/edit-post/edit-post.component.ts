import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { editPost } from 'src/app/store/posts/posts.actions';
import { getPostById } from 'src/app/store/posts/posts.selectors';
import { Post } from 'src/app/store/posts/posts.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  editForm!: FormGroup;
  post: Post | undefined
  postSubscription: Subscription | undefined


  constructor(private fb: FormBuilder, private store: Store<AppState>, private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.postSubscription = this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id')
      this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data;
        this.setform()
      })
    })
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe()
    }
  }

  setform() {
    this.editForm = this.fb.group({
      title: [this.post?.title, [Validators.required, Validators.minLength(5)]],
      content: [this.post?.content, [Validators.required, Validators.minLength(10)]],
    });
  }
  showTitleErrors() {
    const formElement = this.editForm.get('title')
    if (formElement?.invalid && formElement.touched) {
      if (formElement?.errors?.['required']) {
        return 'Title is required.'
      }
      if (formElement.hasError('minlength')) {
        return 'Title should be of minimum 5 char length.'
      }
    }
    return ''
  }
  showContentErrors() {
    const formElement = this.editForm.get('content')
    if (formElement?.invalid && formElement.touched) {
      if (formElement?.errors?.['required']) {
        return 'Content is required.'
      }
      if (formElement.hasError('minlength')) {
        return 'Content should be of minimum 10 char length.'
      }
    }
    return ''
  }

  onSubmit() {
    if (!this.editForm.valid) {
      return
    }
    const title = this.editForm.value.title
    const content = this.editForm.value.content
    const post: Post = {
      id: this.post?.id,
      title,
      content
    }
    this.store.dispatch(editPost({ post }))
    this.editForm.reset()
    this.router.navigate(['posts'])
  }
}
