import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent, UserComponent, EditUserComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule
  ]
})
export class UserListModule { }
