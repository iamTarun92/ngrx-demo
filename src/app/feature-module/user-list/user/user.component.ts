import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: any
  id: string = ''
  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id = this.activeRoute.snapshot.params['id'],
      this.apiService.getUsers().subscribe((res: any) => {
        this.user = res.filter((data: any) => data?.id == this.id)[0]
      });
      // this.apiService.getUserById(this.id).subscribe(data => this.user = data)
    })
  }
}
