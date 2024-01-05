import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  allUsers: any
  currentUser: any

  constructor(private fbuilder: FormBuilder, private store: Store<AppState>, private serviceApi: ApiService) { }

  ngOnInit() {
    sessionStorage.clear()
    this.serviceApi.getAll().subscribe((res) => {
      this.allUsers = res
    })
    this.loginForm = this.fbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit() {
    // console.log(this.loginForm.value);

  }
}
