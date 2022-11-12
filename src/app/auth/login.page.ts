import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  template: `
  <div class="alert alert-primary" role="alert">
  <h1 class="d-flex justify-content-center mb-0">Bentornato, effettua il login per navigare l'app.</h1>
  </div>
  <div class="d-flex justify-content-center mt-5">
  <div class="card  " style="width: 25rem;">
    <div class="card-body ">
      <form #f="ngForm" (ngSubmit)="onSubmit()" class="p-3">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" ngModel name="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" ngModel name="password" class="form-control" id="password">
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </div>
      </form>
      <h3 *ngIf="error">{{ error }}</h3>
      </div>
  </div>
  </div>
  `,
  styles: [
  ]
})
export class LoginPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.form.value);
    this.authService.signin(this.form.value).subscribe(
      data => {
        // console.log(data)
        this.error = undefined;
        localStorage.setItem('userLogin', JSON.stringify(data));
      },
      err => {
        // console.log(err)
        this.error = err.error
      });
  }

}
