import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  user: any
  editUserDetails: any
  id: string = ''
  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id = this.activeRoute.snapshot.params['id'],
        this.apiService.getUsers().subscribe((res: any) => {
          this.user = res.filter((data: any) => data?.id == this.id)[0]
          this.editUserDetails = { ...this.user }
        });
    })
  }
  check() {
    // console.log(this.editUserDetails.name !== this.user.name);

  }
  canExit(): boolean {
    if (this.editUserDetails.name !== this.user.name) {
      if (confirm("Do you wish to Please confirm")) {
        return true
      } else {
        return false
      }
    }
    return true
  }
}
