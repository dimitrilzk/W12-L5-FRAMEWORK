import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  template: `
      <mat-card class="example-card" [ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic',
        'text-white': post.type == 'politic'
      }">
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
    <ng-content></ng-content>
  </mat-card-actions>

    <!-- <div
      [ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic',
        'text-white': post.type == 'politic'
      }"
      class="card mb-4"
    >
      <h5 class="card-header"><span appHighlight >Post</span></h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title | maiuscolo }}</h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <ng-content></ng-content>

      </div>
    </div> -->
  `,
  styles: [`
  .example-card {
  max-width: 400px;
}
.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
}

  `],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
