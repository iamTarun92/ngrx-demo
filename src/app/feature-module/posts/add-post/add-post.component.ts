import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from 'src/app/store/posts/posts.actions';
import { Post } from 'src/app/store/posts/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    const post: Post = this.postForm.value
    this.store.dispatch(addPost({ post }))
    this.postForm.reset()
    this.router.navigate(['posts'])
  }

  showTitleErrors() {
    const formElement = this.postForm.get('title')
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
    const formElement = this.postForm.get('content')
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
}
