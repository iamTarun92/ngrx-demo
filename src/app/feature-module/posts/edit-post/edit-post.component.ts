import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/common';
import { AppState } from 'src/app/store/app.state';
import { editPost } from 'src/app/store/posts/posts.actions';
import { getPostById } from 'src/app/store/posts/posts.selectors';

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
    this.postSubscription = this.store.select(getPostById).subscribe(data => {
      this.post = data;
      this.setform()
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
      body: [this.post?.body, [Validators.required, Validators.minLength(5)]],
    });
  }
  showFormInputErrors(ele: string) {
    const formElement = this.editForm.get(ele)
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

  onSubmit() {
    if (!this.editForm.valid) {
      return
    }
    const title = this.editForm.value.title
    const body = this.editForm.value.body
    const post: Post = {
      id: this.post?.id,
      userId: this.post?.id,
      title,
      body
    }
    this.store.dispatch(editPost({ post }))
    this.editForm.reset()
    this.router.navigate(['posts'])
  }
}
