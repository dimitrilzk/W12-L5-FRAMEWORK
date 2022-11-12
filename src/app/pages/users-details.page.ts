import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
    <ng-container *ngIf="user; else elseTemplate">
    <div class="alert alert-primary  " role="alert">
  <h1 class="d-flex justify-content-center mb-0">{{user.firstname}} {{user.lastname}}</h1>
  <p class="d-flex justify-content-center mb-0">email: {{user.email}}</p>
  </div>
    </ng-container>
    <ng-template #elseTemplate>
    <div class="alert alert-danger" role="alert">
    <p>utente non trovato</p>
    </div>
    </ng-template>

  `,
  styles: [
  ]
})
export class UsersDetailsPage implements OnInit {
user:User|undefined
  constructor(private router:ActivatedRoute, private userSrv:UsersService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      const id = +params['id']
      //this.user = this.userSrv.getUser(id)
      this.userSrv.getUser(id).subscribe(data => this.user = data);
    })
  }

}
