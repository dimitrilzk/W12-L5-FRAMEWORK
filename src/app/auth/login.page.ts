import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  template: `
  <div class="card " style="width: 20rem;">
    <div class="card-body">
      <form #f="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" ngModel name="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" ngModel name="password" class="form-control" id="password">
          <button type="submit" class="btn btn-primary ms-5 mt-2">Submit</button>
        </div>
      </form>
      <h3 *ngIf="error">{{ error }}</h3>
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
