import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
  <table class="table table-success table-striped my-2">
  <thead  >
    <tr >
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
    </tr>
  </thead>
  <tbody>
    <tr [routerLink]="[user.id]" routerLinkActive="active"
        *ngFor="let user of users" >
      <td>{{ user.firstname }}</td>
      <td>{{ user.lastname }}</td>
    </tr>
  </tbody>
</table>
      <hr />
      <router-outlet></router-outlet>
  `,
  styles: [`
  table {
    cursor: pointer;
  }
  `],
})
export class UsersPage implements OnInit {
  users!: User[];
  constructor(private usersSrv: UsersService) {}

  ngOnInit(): void {
    //this.users = this.usersSrv.getUsers();
    this.usersSrv.getUsers().subscribe(data => this.users = data)
  }
}
