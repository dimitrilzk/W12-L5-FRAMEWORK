import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
<h1 class="text-center my-1">Benvenuto sulla home page</h1>
<div class=" my-5 d-flex  justify-content-around">
  <button (click)="gotoActivePosts()" mat-raised-button color="primary">Post Attivi</button>
  <button (click)="gotoInactivePosts()" mat-raised-button color="primary">Post Non Attivi</button>
</div>
<div class="d-flex justify-content-around">
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    </p>
  </mat-card-content>
  <mat-card-actions>
  <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
    <button mat-button><mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="home">share</mat-icon></button>
  </mat-card-actions>
</mat-card>
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    </p>
  </mat-card-content>
  <mat-card-actions>
  <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
    <button mat-button><mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="home">share</mat-icon></button>
  </mat-card-actions>
</mat-card>
</div>

  `,
  styles: [`
  .example-card {
  max-width: 300px;
}

.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
}

  `
  ]
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoInactivePosts(){
    this.router.navigate(['/inactive-posts'])
  }
  gotoActivePosts(){
    this.router.navigate(['/active-posts'])
  }

}
