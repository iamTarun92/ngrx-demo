import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/common';
import { AppState } from 'src/app/store/app.state';
import { addPost } from 'src/app/store/posts/posts.actions';

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
      body: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    const post: Post = {
      title: this.postForm.value.title,
      body: this.postForm.value.body
    }
    this.store.dispatch(addPost({ post }))
    this.postForm.reset()
    this.router.navigate(['posts'])
  }

  showFormInputErrors(ele: string) {
    const formElement = this.postForm.get(ele)
    if (formElement?.invalid && formElement.touched) {
      if (formElement?.errors?.['required']) {
        return `${ele} is required.`
      }
      if (formElement.hasError('minlength')) {
        return `${ele} should be of minimum 5 char length.`
      }
    }
    return ''
  }
}
