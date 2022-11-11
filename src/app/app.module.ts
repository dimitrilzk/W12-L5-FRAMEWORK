import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from './auth/auth.module';
import { LoginPage } from './auth/login.page';
import { RegisterPage } from './auth/register.page';

const routes:Route[] = [
  {
    path:"",
    component:HomePage
  },
  {
    path:"login",
    component:LoginPage
  },
  {
    path:"register",
    component:RegisterPage
  },
  {
    path:"active-posts",
    component:ActivePostsPage
  },
  {
    path:"inactive-posts",
    component:InactivePostsPage
  },
  {
    path:"active-posts/:id",
    component:PostDetailsPage
  },
  {
    path:"inactive-posts/:id",
    component:PostDetailsPage
  },
  {
    path:"users",
    component:UsersPage,
    canActivate: [AuthGuard],
    children:[
      {
        path:":id",
        component:UsersDetailsPage
      }
    ]
  },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    AuthModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
