import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { from, filter, toArray } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: any
  id: string = ''
  constructor(private userService: UsersService, private activeRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id = this.activeRoute.snapshot.params['id'],
      this.userService.getUsers().subscribe((res: any) => {
        this.user = res.filter((data: any) => data?.id == this.id)[0]
      });
      // this.userService.getUserById(this.id).subscribe(data => this.user = data)
    })
  }
}
