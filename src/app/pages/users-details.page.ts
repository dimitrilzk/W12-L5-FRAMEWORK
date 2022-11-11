import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
    <ng-container *ngIf="user; else elseTemplate">
      <h3>{{user.firstname}} {{user.lastname}}</h3>
      <p>email: {{user.email}}</p>
      <p>ruolo: {{user.role}}</p>
    </ng-container>
    <ng-template #elseTemplate>
      <p>utente non trovato</p>
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
